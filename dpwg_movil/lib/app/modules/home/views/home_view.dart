import 'package:dpwg_movil/app/routes/app_pages.dart';
import 'package:dpwg_movil/app/widgets/loader.widget.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'package:get/get.dart';
import 'package:dpwg_movil/app/theme/app_colors.dart';
import '../controllers/home_controller.dart';

class HomeView extends GetView<HomeController> {
  const HomeView({super.key});
  @override
  Widget build(BuildContext context) {

    final container = Obx(() {
      return controller.isLoading.value ? 
        LoaderWidget(message: "Cargando Tablero Inicial")
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

            SingleChildScrollView(
              child: Column(
                children: [
                  _CabeceraUsuario(
                    nombre: controller.userLoged.value.username!,
                    perfil: controller.userLoged.value.currentProfile!.profile!.name ?? "-",
                    entidad: controller.userLoged.value.currentHealthEstablishment!.serviceDeliveryInstitution!.name ?? '-',
                    onSalir: () {
                      // TODO: cerrar sesión
                      controller.logout();
                    },
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(24, 28, 24, 140),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        const Text(
                          '¿Qué deseas hacer?',
                          style: TextStyle(
                            fontSize: 22,
                            fontWeight: FontWeight.w800,
                            color: AppColors.navyDark,
                          ),
                        ),
                        const SizedBox(height: 16),
                        _OpcionHome(
                          titulo: 'Aplicar vacuna',
                          descripcion:
                              'Busca a la persona por DNI, verifica sus datos y registra la vacuna.',
                          icono: Icons.vaccines_rounded,
                          colores: const [
                            AppColors.navyLight,
                            AppColors.navyDark,
                          ],
                          onTap: () {
                            // TODO: navegar a vaccine_application
                            Get.offAllNamed(Routes.VACCINE_APPLICATION);
                          },
                        ),
                        const SizedBox(height: 16),
                        _OpcionHome(
                          titulo: 'Triaje',
                          descripcion:
                              'Busca a la persona por DNI y registra su peso, estatura y edad.',
                          icono: Icons.monitor_heart_rounded,
                          colores: const [
                            AppColors.safeLight,
                            AppColors.safe,
                          ],
                          onTap: () {
                            // TODO: navegar a triaje
                            Get.offAllNamed(Routes.TRIAGE);
                          },
                        ),
                      ],
                    ),
                  ),
                ],
              ),
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
}

// =============================================================================
// Widgets auxiliares
// =============================================================================

/// Cabecera con la información del usuario logueado.
class _CabeceraUsuario extends StatelessWidget {
  final String nombre;
  final String perfil;
  final String entidad;
  final VoidCallback onSalir;

  const _CabeceraUsuario({
    required this.nombre,
    required this.perfil,
    required this.entidad,
    required this.onSalir,
  });

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
          padding: const EdgeInsets.fromLTRB(24, 12, 12, 28),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                children: [
                  const Icon(Icons.shield_rounded,
                      color: Colors.white, size: 26),
                  const SizedBox(width: 8),
                  const Text(
                    'Mi Vacuna',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w800,
                      color: Colors.white,
                    ),
                  ),
                  const Spacer(),
                  IconButton(
                    tooltip: 'Cerrar sesión',
                    onPressed: onSalir,
                    icon: const Icon(Icons.logout_rounded, color: Colors.white),
                  ),
                ],
              ),
              const SizedBox(height: 18),
              Padding(
                padding: const EdgeInsets.only(right: 12),
                child: Row(
                  children: [
                    Container(
                      width: 68,
                      height: 68,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        color: Colors.white.withOpacity(0.18),
                        border: Border.all(color: Colors.white, width: 2),
                      ),
                      child: const Icon(
                        Icons.person_rounded,
                        size: 40,
                        color: Colors.white,
                      ),
                    ),
                    const SizedBox(width: 16),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          const Text(
                            'Bienvenido(a)',
                            style: TextStyle(
                              fontSize: 14,
                              color: Color(0xE6FFFFFF),
                            ),
                          ),
                          const SizedBox(height: 2),
                          Text(
                            nombre,
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis,
                            style: const TextStyle(
                              fontSize: 21,
                              fontWeight: FontWeight.w800,
                              color: Colors.white,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 16),
              Wrap(
                spacing: 8,
                runSpacing: 8,
                children: [
                  _Chip(icono: Icons.badge_rounded, texto: perfil),
                  _Chip(icono: Icons.local_hospital_rounded, texto: entidad),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}

/// Etiqueta pequeña para perfil / entidad.
class _Chip extends StatelessWidget {
  final IconData icono;
  final String texto;

  const _Chip({required this.icono, required this.texto});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.18),
        borderRadius: BorderRadius.circular(20),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          Icon(icono, size: 16, color: Colors.white),
          const SizedBox(width: 6),
          Flexible(
            child: Text(
              texto,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(
                fontSize: 13,
                fontWeight: FontWeight.w600,
                color: Colors.white,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

/// Tarjeta grande de acción.
class _OpcionHome extends StatelessWidget {
  final String titulo;
  final String descripcion;
  final IconData icono;
  final List<Color> colores;
  final VoidCallback onTap;

  const _OpcionHome({
    required this.titulo,
    required this.descripcion,
    required this.icono,
    required this.colores,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(24),
        onTap: onTap,
        child: Ink(
          padding: const EdgeInsets.all(20),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(24),
            gradient: LinearGradient(
              begin: Alignment.topLeft,
              end: Alignment.bottomRight,
              colors: colores,
            ),
            boxShadow: [
              BoxShadow(
                color: colores.last.withOpacity(0.30),
                blurRadius: 16,
                offset: const Offset(0, 8),
              ),
            ],
          ),
          child: Row(
            children: [
              Container(
                width: 72,
                height: 72,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: Colors.white.withOpacity(0.20),
                ),
                child: Icon(icono, size: 38, color: Colors.white),
              ),
              const SizedBox(width: 16),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      titulo,
                      style: const TextStyle(
                        fontSize: 20,
                        fontWeight: FontWeight.w800,
                        color: Colors.white,
                      ),
                    ),
                    const SizedBox(height: 4),
                    Text(
                      descripcion,
                      style: const TextStyle(
                        fontSize: 14,
                        height: 1.3,
                        color: Color(0xE6FFFFFF),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(width: 8),
              const Icon(Icons.arrow_forward_ios_rounded,
                  size: 20, color: Colors.white),
            ],
          ),
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