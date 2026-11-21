import 'package:dpwg_movil/app/data/main.service.dart';
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

  final main = Get.put(MainService());

  @override
  void onInit() {
    super.onInit();
    getInitialData();
  }
  
  Future<void> getInitialData() async {
    userLoged.value = await PreferenceService.getSession();

    final bodyVaccine = {
      "where": {}
    };

    final resultVaccines = await main.allVaccines(bodyVaccine);
    print(resultVaccines);

    vaccines.value = (resultVaccines as Iterable).map((v) => Vaccine.fromJson(v)).toList();
    print(vaccines.length);
    if (vaccines.isNotEmpty) {
      vaccineSelected.value = vaccines.first;
    }

    final bodyDose = {
      "where": {}
    };

    final resultDoses = await main.allDoses(bodyDose);
    doses.value = (resultDoses as Iterable).map((d) => Dose.fromJson(d)).toList();
    

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

  Future<void> searchPatient() async {
    final body = {
      "where": {
        "code": documentNumber.value.text
      }
    };

    final resultPatient = await main.searchPatient(body);
    if ((resultPatient as Iterable).isEmpty) {
      Get.snackbar("Aviso", "No encuentra el paciente. No tiene Historia Clínica Registrada");
      dataConfirmed.value = false;
      vaccineSelected.value = Vaccine();
      doseSelected.value = Dose();
      existsPerson.value = false;
      canApply.value = false;
      return;
    }
    patient.value = resultPatient.map((p) => Patient.fromJson(p)).toList().first;
    dataConfirmed.value = true;
    vaccineSelected.value = vaccines.first;
    doseSelected.value = doses.first;
    existsPerson.value = true;
    canApply.value = true;
    print(resultPatient);
  }

  Future<void> resetSearch() async {
    documentNumber.value = TextEditingValue.empty;
    dataConfirmed.value = false;
    vaccineSelected.value = Vaccine();
    doseSelected.value = Dose();
    existsPerson.value = false;
  }

  Future<void> applyVaccine() async {
    print("Aplicando Vacuna");
    Get.snackbar("Éxito", "Se aplicó correctamente la vacuna");
    Get.offAllNamed(Routes.HOME);
  }
  
}
