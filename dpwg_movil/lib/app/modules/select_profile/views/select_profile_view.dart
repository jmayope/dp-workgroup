import 'package:dpwg_movil/app/widgets/loader.widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'package:get/get.dart';
import 'package:dpwg_movil/app/theme/app_colors.dart';
import '../controllers/select_profile_controller.dart';

class SelectProfileView extends GetView<SelectProfileController> {
  const SelectProfileView({super.key});
  @override
  Widget build(BuildContext context) {

    final container = Obx(() {
      return controller.isLoading.value ? 
        LoaderWidget(message: "Cargando información del usuario",)
      :
        Stack(
          children: [
            // Onda decorativa inferior (misma del login)
            Positioned(
              left: 0,
              right: 0,
              bottom: 0,
              height: 120,
              child: CustomPaint(painter: _WavePainter()),
            ),

            Column(
              children: [
                const _Cabecera(),
                Expanded(
                  child: ListView.separated(
                    padding: const EdgeInsets.fromLTRB(24, 24, 24, 16),
                    itemCount: controller.profiles.length,
                    separatorBuilder: (_, __) => const SizedBox(height: 12),
                    itemBuilder: (context, i) {
                      final userProfile = controller.profiles[i];
                      return _TarjetaPerfil(
                        nombre: userProfile.profile!.name!,
                        descripcion: userProfile.profile!.description ?? "-",
                        seleccionado: controller.selected.value == i,
                        onTap: () => controller.selected.value = i,
                      );
                    },
                  ),
                ),
                _botonContinuar(),
              ],
            ),
          ],
        );
    });

    return AnnotatedRegion<SystemUiOverlayStyle>(
      value: SystemUiOverlayStyle.light.copyWith(
        statusBarColor: Colors.transparent,
      ),
      child: Scaffold(
        backgroundColor: Colors.white,
        body: container,
      ),
    );
  }

  Widget _botonContinuar() {
    final habilitado = controller.selected.value != 0;

    return SafeArea(
      top: false,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(24, 8, 24, 20),
        child: SizedBox(
          height: 56,
          width: double.infinity,
          child: AnimatedOpacity(
            duration: const Duration(milliseconds: 200),
            opacity: habilitado ? 1 : 0.5,
            child: DecoratedBox(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(30),
                gradient: const LinearGradient(
                  colors: [AppColors.navyLight, AppColors.navy],
                ),
                boxShadow: [
                  BoxShadow(
                    color: AppColors.navy.withOpacity(0.30),
                    blurRadius: 14,
                    offset: const Offset(0, 6),
                  ),
                ],
              ),
              child: ElevatedButton.icon(
                onPressed: habilitado
                    ? () {
                        // TODO: guardar perfil seleccionado y navegar a home
                      }
                    : null,
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.transparent,
                  disabledBackgroundColor: Colors.transparent,
                  shadowColor: Colors.transparent,
                  foregroundColor: Colors.white,
                  disabledForegroundColor: Colors.white,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(30),
                  ),
                ),
                icon: const Icon(Icons.arrow_forward_rounded, size: 24),
                label: const Text(
                  'Continuar',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}


// =============================================================================
// Widgets auxiliares
// =============================================================================

/// Cabecera con degradado azul y esquinas inferiores redondeadas.
class _Cabecera extends StatelessWidget {
  const _Cabecera();

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      decoration: const BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [AppColors.navyLight, AppColors.navyDark],
        ),
        borderRadius: BorderRadius.vertical(bottom: Radius.circular(36)),
      ),
      child: SafeArea(
        bottom: false,
        child: Padding(
          padding: const EdgeInsets.fromLTRB(8, 4, 24, 28),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              IconButton(
                onPressed: () => Navigator.maybePop(context),
                icon: const Icon(Icons.arrow_back_rounded, color: Colors.white),
              ),
              Padding(
                padding: const EdgeInsets.only(left: 16),
                child: Row(
                  children: [
                    Container(
                      width: 58,
                      height: 58,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: Colors.white.withOpacity(0.18),
                      ),
                      child: const Icon(
                        Icons.badge_rounded,
                        color: Colors.white,
                        size: 30,
                      ),
                    ),
                    const SizedBox(width: 16),
                    const Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Selecciona tu perfil',
                            style: TextStyle(
                              fontSize: 24,
                              fontWeight: FontWeight.w800,
                              color: Colors.white,
                            ),
                          ),
                          SizedBox(height: 4),
                          Text(
                            'Elige con qué perfil deseas ingresar',
                            style: TextStyle(
                              fontSize: 15,
                              color: Color(0xE6FFFFFF),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

/// Tarjeta seleccionable de perfil.
class _TarjetaPerfil extends StatelessWidget {
  final String nombre;
  final String descripcion;
  final bool seleccionado;
  final VoidCallback onTap;

  const _TarjetaPerfil({
    required this.nombre,
    required this.descripcion,
    required this.seleccionado,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: seleccionado ? const Color(0xFFEAF4FA) : const Color(0xFFF7F9FB),
          borderRadius: BorderRadius.circular(18),
          border: Border.all(
            color: seleccionado ? AppColors.navyLight : const Color(0xFFD5DCE4),
            width: seleccionado ? 2 : 1.2,
          ),
          boxShadow: seleccionado
              ? [
                  BoxShadow(
                    color: AppColors.navyLight.withOpacity(0.20),
                    blurRadius: 12,
                    offset: const Offset(0, 4),
                  ),
                ]
              : null,
        ),
        child: Row(
          children: [
            Container(
              width: 52,
              height: 52,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: seleccionado
                    ? AppColors.navyLight
                    : AppColors.navyLight.withOpacity(0.14),
              ),
              child: Icon(
                Icons.medical_services_rounded,
                size: 26,
                color: seleccionado ? Colors.white : AppColors.navy,
              ),
            ),
            const SizedBox(width: 14),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    nombre,
                    style: const TextStyle(
                      fontSize: 17,
                      fontWeight: FontWeight.w700,
                      color: AppColors.navyDark,
                    ),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    descripcion,
                    style: TextStyle(
                      fontSize: 14,
                      color: AppColors.navyDark.withOpacity(0.65),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(width: 8),
            Icon(
              seleccionado
                  ? Icons.check_circle_rounded
                  : Icons.radio_button_unchecked_rounded,
              size: 28,
              color: seleccionado ? AppColors.safe : const Color(0xFFB8C2CC),
            ),
          ],
        ),
      ),
    );
  }
}

/// Ondas azules claras del pie de pantalla (mismas del login).
class _WavePainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final w = size.width;
    final h = size.height;

    final back = Paint()..color = const Color(0xFFD6EAFB);
    final front = Paint()..color = const Color(0xFFB9DAF7);

    final p1 = Path()
      ..moveTo(0, h * 0.30)
      ..cubicTo(w * 0.25, h * 0.00, w * 0.55, h * 0.65, w, h * 0.15)
      ..lineTo(w, h)
      ..lineTo(0, h)
      ..close();

    final p2 = Path()
      ..moveTo(0, h * 0.62)
      ..cubicTo(w * 0.30, h * 0.35, w * 0.65, h * 0.95, w, h * 0.50)
      ..lineTo(w, h)
      ..lineTo(0, h)
      ..close();

    canvas.drawPath(p1, back);
    canvas.drawPath(p2, front);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}