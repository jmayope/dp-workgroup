import 'package:dpwg_movil/app/data/constants.dart';
import 'package:dpwg_movil/app/routes/app_pages.dart';
import 'package:dpwg_movil/models/index.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import 'package:get/get.dart';
import 'package:dpwg_movil/app/theme/app_colors.dart';
import '../controllers/vaccine_application_controller.dart';

class VaccineApplicationView extends GetView<VaccineApplicationController> {
  const VaccineApplicationView({super.key});
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

                      // ---------------- 2. Verificar datos ----------------
                      if (controller.existsPerson.value) ...[
                        const SizedBox(height: 28),
                        const _TituloSeccion(
                          numero: '2',
                          texto: 'Verificar datos',
                        ),
                        const SizedBox(height: 12),
                        _tarjetaDatos(),
                        const SizedBox(height: 8),
                        _confirmacionDatos(),

                        // ---------------- 3. Vacuna y dosis ----------------
                        const SizedBox(height: 20),
                        const _TituloSeccion(
                          numero: '3',
                          texto: 'Vacuna y dosis',
                        ),
                        const SizedBox(height: 12),
                        _selectorVacuna(),
                        const SizedBox(height: 12),
                        _selectorDosis(),
                      ],
                    ],
                  ),
                ),
              ),
            ),
            _botonAplicar(),
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
                controller.dataConfirmed.value = false;
                controller.vaccineSelected.value = Vaccine();
                controller.doseSelected.value = Dose();

                // setState(() {
                //   _datosConfirmados = false;
                //   _vacunaSeleccionada = null;
                //   _dosisSeleccionada = null;
                // });
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
  // 2. Datos de la persona
  // ---------------------------------------------------------------------------
  Widget _tarjetaDatos() {
    final p = controller.patient.value;

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: const Color(0xFFEAF4FA),
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: AppColors.navyLight.withOpacity(0.4)),
      ),
      child: Column(
        children: [
          Row(
            children: [
              Container(
                width: 52,
                height: 52,
                decoration: const BoxDecoration(
                  shape: BoxShape.circle,
                  color: AppColors.navyLight,
                ),
                child: const Icon(Icons.person_rounded,
                    color: Colors.white, size: 30),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Text(
                  "${p.paternalSurname} ${p.maternalSurname} ${p.firstName}",
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.w800,
                    color: AppColors.navyDark,
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(height: 14),
          const Divider(height: 1, color: Color(0xFFCFE3F0)),
          const SizedBox(height: 10),
          _FilaDato(
              icono: Icons.badge_outlined, etiqueta: 'DNI', valor: p.code!),
          _FilaDato(
              icono: Icons.cake_outlined,
              etiqueta: 'Fecha de nacimiento',
              valor: formatDate(p.dateOfBirth!)),
          _FilaDato(
              icono: Icons.timelapse_rounded,
              etiqueta: 'Edad',
              valor: "${calculateAge(p.dateOfBirth!)} años"),
          _FilaDato(
              icono: Icons.wc_rounded, etiqueta: 'Sexo', valor: p.gender!),
        ],
      ),
    );
  }

  Widget _confirmacionDatos() {
    return InkWell(
      borderRadius: BorderRadius.circular(12),
      onTap: () => controller.dataConfirmed.value = !controller.dataConfirmed.value,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 6),
        child: Row(
          children: [
            Checkbox(
              value: controller.dataConfirmed.value,
              activeColor: AppColors.safe,
              onChanged: (v) =>
                  controller.dataConfirmed.value = v ?? false,
            ),
            const Expanded(
              child: Text(
                'Confirmo que los datos son correctos',
                style: TextStyle(
                  fontSize: 15,
                  fontWeight: FontWeight.w600,
                  color: AppColors.navyDark,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  // ---------------------------------------------------------------------------
  // 3. Vacuna y dosis
  // ---------------------------------------------------------------------------
  Widget _selectorVacuna() {
    return DropdownButtonFormField<Vaccine>(
      value: controller.vaccineSelected.value,
      isExpanded: true,
      icon: const Icon(Icons.keyboard_arrow_down_rounded,
          color: AppColors.navyDark),
      style: const TextStyle(fontSize: 16, color: AppColors.navyDark),
      decoration: _decoracion(
        hint: 'Selecciona la vacuna',
        icono: Icons.vaccines_rounded,
      ),
      items: [
        for (final v in controller.vaccines)
          DropdownMenuItem<Vaccine>(
            value: v,
            child: Text(v.name!, overflow: TextOverflow.ellipsis),
          ),
      ],
      onChanged: controller.dataConfirmed.value
          ? (v) => controller.vaccineSelected.value = v!
          : null,
    );
  }

  Widget _selectorDosis() {
    return DropdownButtonFormField<Dose>(
      value: controller.doseSelected.value,
      isExpanded: true,
      icon: const Icon(Icons.keyboard_arrow_down_rounded,
          color: AppColors.navyDark),
      style: const TextStyle(fontSize: 16, color: AppColors.navyDark),
      decoration: _decoracion(
        hint: 'Selecciona la dosis',
        icono: Icons.numbers_rounded,
      ),
      items: [
        for (final d in controller.doses)
          DropdownMenuItem<Dose>(value: d, child: Text("${d.name!} - ${d.number}")),
      ],
      onChanged: controller.dataConfirmed.value
          ? (d) => controller.doseSelected.value = d!
          : null,
    );
  }

  // ---------------------------------------------------------------------------
  // Botón aplicar
  // ---------------------------------------------------------------------------
  Widget _botonAplicar() {
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
        child: SizedBox(
          height: 56,
          width: double.infinity,
          child: AnimatedOpacity(
            duration: const Duration(milliseconds: 200),
            opacity: controller.canApply.value ? 1 : 0.5,
            child: DecoratedBox(
              decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(30),
                gradient: const LinearGradient(
                  colors: [AppColors.safeLight, AppColors.safe],
                ),
                boxShadow: [
                  BoxShadow(
                    color: AppColors.safe.withOpacity(0.30),
                    blurRadius: 14,
                    offset: const Offset(0, 6),
                  ),
                ],
              ),
              child: ElevatedButton.icon(
                onPressed: controller.canApply.value
                    ? () {
                        // TODO: registrar la aplicación de la vacuna
                        controller.applyVaccine();
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
                icon: const Icon(Icons.vaccines_rounded, size: 24),
                label: const Text(
                  'Aplicar vacuna',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700),
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }

  // ---------------------------------------------------------------------------
  // Decoración de campos (mismo estilo del login)
  // ---------------------------------------------------------------------------
  InputDecoration _decoracion({required String hint, required IconData icono}) {
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
      filled: true,
      fillColor: const Color(0xFFF7F9FB),
      contentPadding: const EdgeInsets.symmetric(vertical: 18, horizontal: 12),
      enabledBorder: borde(const Color(0xFFD5DCE4)),
      disabledBorder: borde(const Color(0xFFE6EBF0)),
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
          colors: [AppColors.navyLight, AppColors.navyDark],
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
                        Icons.vaccines_rounded,
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
                            'Aplicar vacuna',
                            style: TextStyle(
                              fontSize: 24,
                              fontWeight: FontWeight.w800,
                              color: Colors.white,
                            ),
                          ),
                          SizedBox(height: 4),
                          Text(
                            'Busca a la persona y registra la vacuna',
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

/// Fila etiqueta / valor dentro de la tarjeta de datos.
class _FilaDato extends StatelessWidget {
  final IconData icono;
  final String etiqueta;
  final String valor;

  const _FilaDato({
    required this.icono,
    required this.etiqueta,
    required this.valor,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 6),
      child: Row(
        children: [
          Icon(icono, size: 20, color: AppColors.navy),
          const SizedBox(width: 10),
          Text(
            etiqueta,
            style: TextStyle(
              fontSize: 14,
              color: AppColors.navyDark.withOpacity(0.65),
            ),
          ),
          const Spacer(),
          Text(
            valor,
            style: const TextStyle(
              fontSize: 15,
              fontWeight: FontWeight.w700,
              color: AppColors.navyDark,
            ),
          ),
        ],
      ),
    );
  }
}
