import 'package:dpwg_movil/app/routes/app_pages.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'package:get/get.dart';
import 'package:dpwg_movil/app/theme/app_colors.dart';
import '../controllers/triage_controller.dart';

class TriageView extends GetView<TriageController> {
  const TriageView({super.key});
  @override
  Widget build(BuildContext context) {
    return AnnotatedRegion<SystemUiOverlayStyle>(
      value: SystemUiOverlayStyle.light.copyWith(
        statusBarColor: Colors.transparent,
      ),
      child: Scaffold(
        backgroundColor: Colors.white,
        body: Column(
          children: [
            const _Cabecera(),
            Expanded(
              child: GestureDetector(
                onTap: () => FocusScope.of(context).unfocus(),
                child: SingleChildScrollView(
                  padding: const EdgeInsets.fromLTRB(24, 24, 24, 16),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      // ---------------- 1. Buscar persona ----------------
                      const _TituloSeccion(
                        numero: '1',
                        texto: 'Buscar persona',
                      ),
                      const SizedBox(height: 12),
                      _buscadorDni(),

                      // ---------------- 2. Medidas ----------------
                      if (controller.existsPerson.value) ...[
                        const SizedBox(height: 20),
                        _tarjetaPersona(),
                        const SizedBox(height: 28),
                        const _TituloSeccion(
                          numero: '2',
                          texto: 'Datos del triaje',
                        ),
                        const SizedBox(height: 12),
                        _campoPeso(),
                        const SizedBox(height: 12),
                        _campoEstatura(),
                        const SizedBox(height: 12),
                        _campoEdad(),
                      ],
                    ],
                  ),
                ),
              ),
            ),
            _botonGuardar(),
          ],
        ),
      ),
    );
  }

  // ---------------------------------------------------------------------------
  // 1. Buscador por DNI
  // ---------------------------------------------------------------------------
  Widget _buscadorDni() {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Expanded(
          child: TextField(
            controller: controller.documentNumber,
            keyboardType: TextInputType.number,
            textInputAction: TextInputAction.search,
            inputFormatters: [
              FilteringTextInputFormatter.digitsOnly,
              LengthLimitingTextInputFormatter(8),
            ],
            style: const TextStyle(fontSize: 16, color: AppColors.navyDark),
            decoration: _decoracion(
              hint: 'DNI de la persona',
              icono: Icons.badge_rounded,
            ),
          ),
        ),
        const SizedBox(width: 10),
        SizedBox(
          height: 56,
          width: 56,
          child: DecoratedBox(
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(14),
              gradient: const LinearGradient(
                colors: [AppColors.navyLight, AppColors.navy],
              ),
              boxShadow: [
                BoxShadow(
                  color: AppColors.navy.withOpacity(0.30),
                  blurRadius: 10,
                  offset: const Offset(0, 4),
                ),
              ],
            ),
            child: IconButton(
              tooltip: 'Buscar',
              onPressed: () {
                // TODO: buscar persona por DNI y luego setState(...)
                FocusScope.of(Get.context!).unfocus();
              },
              icon: const Icon(Icons.search_rounded,
                  color: Colors.white, size: 28),
            ),
          ),
        ),
      ],
    );
  }

  // ---------------------------------------------------------------------------
  // Persona encontrada
  // ---------------------------------------------------------------------------
  Widget _tarjetaPersona() {
    final p = controller.patient.value;

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: const Color(0xFFEAF4FA),
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: AppColors.navyLight.withOpacity(0.4)),
      ),
      child: Row(
        children: [
          Container(
            width: 52,
            height: 52,
            decoration: const BoxDecoration(
              shape: BoxShape.circle,
              color: AppColors.navyLight,
            ),
            child:
                const Icon(Icons.person_rounded, color: Colors.white, size: 30),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  "${p.paternalSurname} ${p.maternalSurname} ${p.firstName}",
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w800,
                    color: AppColors.navyDark,
                  ),
                ),
                const SizedBox(height: 2),
                Text(
                  'DNI ${p.code}  •  ${p.gender}',
                  style: TextStyle(
                    fontSize: 14,
                    color: AppColors.navyDark.withOpacity(0.65),
                  ),
                ),
              ],
            ),
          ),
          const Icon(Icons.check_circle_rounded,
              color: AppColors.safe, size: 28),
        ],
      ),
    );
  }

  // ---------------------------------------------------------------------------
  // 2. Campos del triaje
  // ---------------------------------------------------------------------------
  Widget _campoPeso() {
    return TextField(
      controller: controller.weight,
      keyboardType: const TextInputType.numberWithOptions(decimal: true),
      textInputAction: TextInputAction.next,
      inputFormatters: [
        FilteringTextInputFormatter.allow(RegExp(r'^\d{0,3}([.,]\d{0,2})?$')),
      ],
      style: const TextStyle(fontSize: 16, color: AppColors.navyDark),
      decoration: _decoracion(
        hint: 'Peso',
        icono: Icons.monitor_weight_rounded,
        sufijo: 'kg',
      ),
    );
  }

  Widget _campoEstatura() {
    return TextField(
      controller: controller.height,
      keyboardType: const TextInputType.numberWithOptions(decimal: true),
      textInputAction: TextInputAction.next,
      inputFormatters: [
        FilteringTextInputFormatter.allow(RegExp(r'^\d{0,3}([.,]\d{0,1})?$')),
      ],
      style: const TextStyle(fontSize: 16, color: AppColors.navyDark),
      decoration: _decoracion(
        hint: 'Estatura',
        icono: Icons.height_rounded,
        sufijo: 'cm',
      ),
    );
  }

  Widget _campoEdad() {
    return TextField(
      controller: controller.age,
      keyboardType: TextInputType.number,
      textInputAction: TextInputAction.done,
      inputFormatters: [
        FilteringTextInputFormatter.digitsOnly,
        LengthLimitingTextInputFormatter(3),
      ],
      style: const TextStyle(fontSize: 16, color: AppColors.navyDark),
      decoration: _decoracion(
        hint: 'Edad',
        icono: Icons.cake_rounded,
        sufijo: 'años',
      ),
    );
  }

  // ---------------------------------------------------------------------------
  // Botón guardar (se habilita cuando peso, estatura y edad tienen valor)
  // ---------------------------------------------------------------------------
  Widget _botonGuardar() {
    return SafeArea(
      top: false,
      child: Container(
        padding: const EdgeInsets.fromLTRB(24, 12, 24, 16),
        decoration: BoxDecoration(
          color: Colors.white,
          boxShadow: [
            BoxShadow(
              color: Colors.black.withOpacity(0.06),
              blurRadius: 12,
              offset: const Offset(0, -4),
            ),
          ],
        ),
        child: ListenableBuilder(
          listenable: Listenable.merge([
            controller.weight,
            controller.height,
            controller.age,
          ]),
          builder: (context, _) {
            final habilitado = controller.existsPerson.value &&
                controller.weight.text.trim().isNotEmpty &&
                controller.height.text.trim().isNotEmpty &&
                controller.age.text.trim().isNotEmpty;

            return SizedBox(
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
                            // TODO: guardar peso, estatura y edad
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
                    icon: const Icon(Icons.save_rounded, size: 24),
                    label: const Text(
                      'Guardar triaje',
                      style:
                          TextStyle(fontSize: 18, fontWeight: FontWeight.w700),
                    ),
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }

  // ---------------------------------------------------------------------------
  // Decoración de campos (mismo estilo del login)
  // ---------------------------------------------------------------------------
  InputDecoration _decoracion({
    required String hint,
    required IconData icono,
    String? sufijo,
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
      suffixText: sufijo,
      suffixStyle: const TextStyle(
        fontSize: 15,
        fontWeight: FontWeight.w700,
        color: AppColors.navy,
      ),
      filled: true,
      fillColor: const Color(0xFFF7F9FB),
      contentPadding: const EdgeInsets.symmetric(vertical: 18, horizontal: 12),
      enabledBorder: borde(const Color(0xFFD5DCE4)),
      focusedBorder: borde(AppColors.navyLight, 1.8),
      border: borde(const Color(0xFFD5DCE4)),
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
          colors: [AppColors.safeLight, AppColors.safe],
        ),
        borderRadius: BorderRadius.vertical(bottom: Radius.circular(36)),
      ),
      child: SafeArea(
        bottom: false,
        child: Padding(
          padding: const EdgeInsets.fromLTRB(8, 4, 24, 24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              IconButton(
                onPressed: () => Get.offAllNamed(Routes.HOME),
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
                        Icons.monitor_heart_rounded,
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
                            'Triaje',
                            style: TextStyle(
                              fontSize: 24,
                              fontWeight: FontWeight.w800,
                              color: Colors.white,
                            ),
                          ),
                          SizedBox(height: 4),
                          Text(
                            'Registra peso, estatura y edad',
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

/// Título de sección con número en círculo (los pasos sí son una secuencia).
class _TituloSeccion extends StatelessWidget {
  final String numero;
  final String texto;

  const _TituloSeccion({required this.numero, required this.texto});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Container(
          width: 28,
          height: 28,
          alignment: Alignment.center,
          decoration: const BoxDecoration(
            shape: BoxShape.circle,
            color: AppColors.navy,
          ),
          child: Text(
            numero,
            style: const TextStyle(
              color: Colors.white,
              fontWeight: FontWeight.w800,
              fontSize: 14,
            ),
          ),
        ),
        const SizedBox(width: 10),
        Text(
          texto,
          style: const TextStyle(
            fontSize: 19,
            fontWeight: FontWeight.w800,
            color: AppColors.navyDark,
          ),
        ),
      ],
    );
  }
}