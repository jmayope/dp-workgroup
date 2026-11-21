import 'package:dpwg_movil/app/data/preference.service.dart';
import 'package:dpwg_movil/app/routes/app_pages.dart';
import 'package:dpwg_movil/models/index.dart';
import 'package:get/get.dart';

class HomeController extends GetxController {
  //TODO: Implement HomeController

  final isLoading = true.obs;
  final userLoged = MedicalStaff().obs;

  
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

  Future<void> logout() async {
    PreferenceService.clearAll();
    Get.offAllNamed(Routes.LOGIN);
  }
  
}
