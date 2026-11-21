import 'package:dpwg_movil/app/routes/app_pages.dart';
import 'package:dpwg_movil/app/theme/app_colors.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'package:get/get.dart';

import '../controllers/login_controller.dart';

class LoginView extends GetView<LoginController> {
  const LoginView({super.key});
  @override
  Widget build(BuildContext context) {
    return AnnotatedRegion<SystemUiOverlayStyle>(
      value: SystemUiOverlayStyle.light.copyWith(
        statusBarColor: Colors.transparent,
      ),
      child: Scaffold(
        backgroundColor: Colors.white,
        body: LayoutBuilder(
          builder: (context, constraints) {
            // Altura mínima para que el diseño no se rompa en pantallas chicas
            // o cuando aparece el teclado (en ese caso hace scroll).
            final double h =
                constraints.maxHeight < 750 ? 950 : constraints.maxHeight;
            final double w = constraints.maxWidth;
            final double imgH = h * 0.40;

            return SingleChildScrollView(
              child: SizedBox(
                height: h,
                width: w,
                child: Stack(
                  children: [
                    // ---------------- Imagen de fondo ----------------
                    Positioned(
                      top: 0,
                      left: 0,
                      right: 0,
                      height: imgH + 40,
                      child: Stack(
                        fit: StackFit.expand,
                        children: [
                          Image.asset(
                            'assets/images/background.png',
                            fit: BoxFit.cover,
                            alignment: Alignment.topCenter,
                          ),
                          // Degradado suave hacia el azul de la marca
                          DecoratedBox(
                            decoration: BoxDecoration(
                              gradient: LinearGradient(
                                begin: Alignment.topCenter,
                                end: Alignment.bottomCenter,
                                colors: [
                                  Colors.transparent,
                                  AppColors.navyLight.withOpacity(0.25),
                                ],
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),

                    // ---------------- Panel blanco curvo ----------------
                    Positioned(
                      top: imgH - 20,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      child: ClipPath(
                        clipper: _TopCurveClipper(),
                        child: Container(color: Colors.white),
                      ),
                    ),

                    // ---------------- Onda inferior ----------------
                    Positioned(
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: 120,
                      child: CustomPaint(painter: _WavePainter()),
                    ),

                    // ---------------- Escudo / logo ----------------
                    Positioned(
                      top: imgH - 92,
                      left: 0,
                      right: 0,
                      child: const Center(child: _LogoEscudo()),
                    ),

                    // ---------------- Contenido ----------------
                    Positioned.fill(
                      top: imgH + 32,
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 24),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            const _Titulo(),
                            const SizedBox(height: 22),
                            _campoCorreo(),
                            const SizedBox(height: 12),
                            _campoContrasena(),
                            const SizedBox(height: 18),
                            _botonIngresar(),
                            const SizedBox(height: 6),
                            Center(
                              child: TextButton(
                                onPressed: () {
                                  // TODO: navegar a unlock_user / recuperar acceso
                                },
                                child: const Text(
                                  '¿Olvidaste tu contraseña?',
                                  style: TextStyle(
                                    color: AppColors.navyLight,
                                    fontSize: 15,
                                    fontWeight: FontWeight.w600,
                                  ),
                                ),
                              ),
                            ),
                            const Spacer(),
                            const _PieEstablecimiento(),
                            const SizedBox(height: 14),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }

  // ---------------------------------------------------------------------------
  // Campos
  // ---------------------------------------------------------------------------
  Widget _campoCorreo() {
    return TextField(
      controller: controller.email,
      keyboardType: TextInputType.emailAddress,
      textInputAction: TextInputAction.next,
      style: const TextStyle(fontSize: 16, color: AppColors.navyDark),
      decoration: _decoracionCampo(
        hint: 'Correo electrónico',
        icono: Icons.person_rounded,
      ),
    );
  }

  Widget _campoContrasena() {
    return TextField(
      controller: controller.password,
      obscureText: !controller.showPassword.value,
      textInputAction: TextInputAction.done,
      style: const TextStyle(fontSize: 16, color: AppColors.navyDark),
      decoration: _decoracionCampo(
        hint: 'Contraseña',
        icono: Icons.lock_rounded,
        sufijo: IconButton(
          splashRadius: 20,
          icon: Icon(
            !controller.showPassword.value
                ? Icons.visibility_off_rounded
                : Icons.visibility_rounded,
            color: AppColors.navyDark,
          ),
          onPressed: () => controller.showPassword.value = !controller.showPassword.value,
        ),
      ),
    );
  }

  InputDecoration _decoracionCampo({
    required String hint,
    required IconData icono,
    Widget? sufijo,
  }) {
    OutlineInputBorder borde(Color c, [double w = 1.2]) => OutlineInputBorder(
          borderRadius: BorderRadius.circular(14),
          borderSide: BorderSide(color: c, width: w),
        );

    return InputDecoration(
      hintText: hint,
      hintStyle: TextStyle(
        color: AppColors.navyDark.withOpacity(0.45),
        fontSize: 16,
      ),
      prefixIcon: Icon(icono, color: AppColors.navyDark, size: 26),
      suffixIcon: sufijo,
      filled: true,
      fillColor: const Color(0xFFF7F9FB),
      contentPadding: const EdgeInsets.symmetric(vertical: 18, horizontal: 12),
      enabledBorder: borde(const Color(0xFFD5DCE4)),
      focusedBorder: borde(AppColors.navyLight, 1.8),
      border: borde(const Color(0xFFD5DCE4)),
    );
  }

  // ---------------------------------------------------------------------------
  // Botón
  // ---------------------------------------------------------------------------
  Widget _botonIngresar() {
    return Obx(() => SizedBox(
      height: 56,
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
          onPressed: controller.logging.value ? null : () async {
            // TODO: lógica de inicio de sesión
            await controller.login();
          },
          style: ElevatedButton.styleFrom(
            backgroundColor: Colors.transparent,
            shadowColor: Colors.transparent,
            foregroundColor: Colors.white,
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(30),
            ),
          ),
          icon: const Icon(Icons.login_rounded, size: 24),
          label: controller.logging.value ? CircularProgressIndicator() : Text(
            'Ingresar',
            style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700),
          ),
        ),
      ),
    )) ;
  }
}

// =============================================================================
// Widgets auxiliares
// =============================================================================

/// Título "Mi Vacuna" + lema.
class _Titulo extends StatelessWidget {
  const _Titulo();

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        RichText(
          text: const TextSpan(
            style: TextStyle(
              fontSize: 46,
              fontWeight: FontWeight.w800,
              height: 1.0,
              letterSpacing: -0.5,
            ),
            children: [
              TextSpan(text: 'Mi ', style: TextStyle(color: AppColors.navyDark)),
              TextSpan(text: 'Vacuna', style: TextStyle(color: AppColors.navy)),
            ],
          ),
        ),
        const SizedBox(height: 8),
        Text(
          'Tu salud, nuestra prioridad',
          style: TextStyle(
            fontSize: 17,
            fontWeight: FontWeight.w500,
            color: AppColors.navyDark.withOpacity(0.85),
          ),
        ),
      ],
    );
  }
}

/// Escudo con jeringa y familia.
/// Si ya tienes el logo como imagen, reemplaza el contenido por:
///   Image.asset('assets/images/logo_mi_vacuna.png', width: 130)
class _LogoEscudo extends StatelessWidget {
  const _LogoEscudo();

  @override
  Widget build(BuildContext context) {
    return Container(
      width: 130,
      height: 130,
      decoration: const BoxDecoration(
        shape: BoxShape.circle,
        color: Colors.transparent,
      ),
      child: Stack(
        alignment: Alignment.center,
        children: [
          // Borde blanco del escudo
          const Icon(Icons.shield_rounded, size: 128, color: Colors.white),
          // Escudo principal
          ShaderMask(
            shaderCallback: (rect) => const LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [AppColors.navyLight, AppColors.navy],
            ).createShader(rect),
            child: const Icon(
              Icons.shield_rounded,
              size: 116,
              color: Colors.white,
            ),
          ),
          // Jeringa + familia
          const Padding(
            padding: EdgeInsets.only(bottom: 4),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Icon(Icons.vaccines_rounded, size: 34, color: Colors.white),
                SizedBox(height: 2),
                Icon(Icons.family_restroom_rounded,
                    size: 44, color: Colors.white),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

/// Pie: Puesto de Salud + mensaje.
class _PieEstablecimiento extends StatelessWidget {
  const _PieEstablecimiento();

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Container(
          padding: const EdgeInsets.all(8),
          decoration: BoxDecoration(
            color: Colors.white.withOpacity(0.9),
            borderRadius: BorderRadius.circular(14),
          ),
          child: const Icon(
            Icons.local_hospital_rounded,
            size: 34,
            color: AppColors.navyLight,
          ),
        ),
        const SizedBox(height: 6),
        const Text(
          'Puesto de Salud',
          style: TextStyle(
            fontSize: 16,
            fontWeight: FontWeight.w800,
            color: AppColors.navyDark,
          ),
        ),
        const Text(
          'Cuidamos de ti y tu familia',
          style: TextStyle(fontSize: 14, color: AppColors.navyDark),
        ),
      ],
    );
  }
}

// =============================================================================
// Painters / Clippers
// =============================================================================

/// Recorta la parte superior del panel blanco con una curva convexa.
class _TopCurveClipper extends CustomClipper<Path> {
  @override
  Path getClip(Size size) {
    final path = Path()
      ..moveTo(0, 56)
      ..quadraticBezierTo(size.width / 2, -28, size.width, 56)
      ..lineTo(size.width, size.height)
      ..lineTo(0, size.height)
      ..close();
    return path;
  }

  @override
  bool shouldReclip(covariant CustomClipper<Path> oldClipper) => false;
}

/// Ondas azules claras del pie de pantalla.
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