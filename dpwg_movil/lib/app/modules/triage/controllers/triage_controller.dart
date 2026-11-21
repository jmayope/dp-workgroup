import 'package:dpwg_movil/app/data/preference.service.dart';
import 'package:dpwg_movil/models/index.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';

class TriageController extends GetxController {
  //TODO: Implement TriageController

  final isLoading = true.obs;
  final existsPerson = false.obs;

  final userLoged = MedicalStaff().obs;
  final documentNumber = TextEditingController();
  final patient = Patient().obs;
  final weight = TextEditingController();
  final height = TextEditingController();
  final age = TextEditingController();

  @override
  void onInit() {
    super.onInit();
    getInitialData();
  }

  Future<void> getInitialData() async {

    userLoged.value = await PreferenceService.getSession();

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

  
}
