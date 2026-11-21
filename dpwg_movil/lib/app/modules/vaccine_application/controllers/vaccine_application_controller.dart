import 'package:dpwg_movil/app/data/preference.service.dart';
import 'package:dpwg_movil/app/routes/app_pages.dart';
import 'package:dpwg_movil/models/index.dart';
import 'package:flutter/widgets.dart';
import 'package:get/get.dart';

class VaccineApplicationController extends GetxController {
  //TODO: Implement VaccineApplicationController

  final isLoading = true.obs;

  final documentNumber = TextEditingController();
  
  final patient = Patient().obs;
  final vaccineSelected = Vaccine().obs;
  final doseSelected = Dose().obs;
  final existsPerson = false.obs;
  final dataConfirmed = false.obs;

  final vaccines = <Vaccine>[].obs;
  final doses = <Dose>[].obs;

  final canApply = false.obs;
  final userLoged = MedicalStaff().obs;

  @override
  void onInit() {
    super.onInit();
    getInitialData();
  }
  
  Future<void> getInitialData() async {
    userLoged.value = await PreferenceService.getSession();

    vaccines.value = [];

    isLoading.value = false;
  }

  @override
  void onReady() {
    super.onReady();
  }

  @override
  void onClose() {
    super.onClose();
  }

  Future<void> applyVaccine() async {
    print("Aplicando Vacuna");
    Get.snackbar("Éxito", "Se aplicó correctamente la vacuna");
    Get.offAllNamed(Routes.HOME);
  }
  
}
