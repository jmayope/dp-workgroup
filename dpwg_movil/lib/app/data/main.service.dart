import 'package:dio/dio.dart';
import 'package:dpwg_movil/app/data/dio.client.dart';
import 'package:dpwg_movil/app/data/preference.service.dart';
import 'package:dpwg_movil/models/index.dart';

class MainService {
  final Dio _dio = DioClient.instance;

  // ── Session ───────────────────────────────────────────────
  Future<bool> setSession(MedicalStaff user) =>
      PreferenceService.setSession(user);

  Future<MedicalStaff> getSession() =>
      PreferenceService.getSession();

  // ── Login ─────────────────────────────────────────────────
  Future<dynamic> login(String username, String password) async {
    try {
      final response = await _dio.post(
        '/auth/login',
        data: {'username': username, 'password': password},
        // Forzar que el login no lleve el token antiguo
        options: Options(extra: {'skipAuth': true}), 
      );

      if (response.statusCode == 200) {
        final user = MedicalStaff.fromJson(response.data);
        await PreferenceService.setSession(user);
        // Sincronizar el token en memoria del interceptor
        await DioClient.updateToken(user.token!); 
      }
      return response.data;
    } on DioException catch (e) {
      // Devolver mensaje de error más claro
      return {'message': _mapDioError(e), 'error': true};
    }
  }

  // ── Ejemplo: Obtener perfil ────────────────────────────────
  Future<dynamic> getProfile() async {
    try {
      final response = await _dio.get('/profile/where');
      return response.data;
    } on DioException catch (e) {
      return {'message': _mapDioError(e), 'error': true};
    }
  }

  // Mapeo unificado de errores
  String _mapDioError(DioException e) {
    if (e.response?.statusCode == 401) return 'La sesión ha expirado, por favor inicia sesión nuevamente';
    if (e.type == DioExceptionType.connectionTimeout) return 'Tiempo de conexión agotado';
    if (e.type == DioExceptionType.connectionError) return 'Error de red, por favor verifica tu conexión';
    return e.message ?? 'Error desconocido';
  }
}