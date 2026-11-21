import 'package:dpwg_movil/app/data/preference.service.dart';
import 'package:dpwg_movil/app/routes/app_pages.dart';
import 'package:dpwg_movil/models/index.dart';
import 'package:get/get.dart';

class SelectEntityController extends GetxController {
  //TODO: Implement SelectEntityController

  final isLoading = true.obs;
  final userLoged = MedicalStaff().obs;
  final userHealthEstablishments = <UserHealthEstablishment>[].obs;
  final selected = int.parse('0').obs;


  @override
  void onInit() {
    super.onInit();
    getInitialData();
  }

  Future<void> getInitialData() async {
    userLoged.value = await PreferenceService.getSession();

    userHealthEstablishments.value = userLoged.value.healthEstablisments ?? [];
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

  Future<void> nextContinue() async {
    Get.offAllNamed(Routes.SELECT_PROFILE);
  }
}
