import 'package:dio/dio.dart';
import 'package:dpwg_movil/app/data/constants.dart';
import 'package:dpwg_movil/app/data/preference.service.dart';
import 'package:dpwg_movil/models/index.dart';

class DioClient {
  static final Dio _dio = Dio(BaseOptions(
    baseUrl: API_URI, // Tu dirección de backend
    connectTimeout: const Duration(seconds: 10),
    receiveTimeout: const Duration(seconds: 10),
  ));

  static String? _accessToken;

  static Dio get instance => _dio;

  static void init() {
    _dio.interceptors.add(QueuedInterceptorsWrapper(
      onRequest: (options, handler) {
        // Si se solicita explícitamente saltar la autenticación (como el login), no añadir token
        if (options.extra['skipAuth'] == true) {
          return handler.next(options);
        }
        // Añadir Token automáticamente
        if (_accessToken != null) {
          options.headers['Authorization'] = 'Bearer $_accessToken';
        }
        return handler.next(options);
      },
      onError: (error, handler) async {
        // Procesar solo errores 401 y que no sean solicitudes de renovación
        if (error.response?.statusCode == 401 && 
            error.requestOptions.extra['skipAuth'] != true) {
          
          // Intentar renovar el token usando las credenciales guardadas
          final newToken = await _refreshToken();
          
          if (newToken != null) {
            // Actualizar el token en memoria
            _accessToken = newToken;
            
            // Reenviar la solicitud original usando el nuevo token
            final opts = error.requestOptions;
            opts.headers['Authorization'] = 'Bearer $newToken';
            
            try {
              final response = await _dio.fetch(opts);
              return handler.resolve(response);
            } on DioException catch (e) {
              return handler.next(e);
            }
          } else {
            // Renovación fallida, limpiar sesión
            await PreferenceService.clearAll();
            _accessToken = null;
          }
        }
        return handler.next(error);
      },
    ));
  }

  // Actualizar token en memoria al iniciar sesión exitosamente
  static Future<void> updateToken(String token) async {
    _accessToken = token;
  }

  // Usar las credenciales guardadas para renovar el token
  static Future<String?> _refreshToken() async {
    try {
      final credentials = await PreferenceService.getSession();
      if (credentials == null) return null;

      // Crear un Dio temporal sin interceptor para evitar dependencia circular
      final refreshDio = Dio(BaseOptions(baseUrl: _dio.options.baseUrl));
      final res = await refreshDio.post('/auth/login', data: {
        'username': credentials.email,
        'password': credentials.password,
      });

      if (res.statusCode == 200) {
        final user = MedicalStaff.fromJson(res.data);
        await PreferenceService.setSession(user);
        return user.token;
      }
    } catch (_) {
      // La renovación falló silenciosamente
    }
    return null;
  }
}