import 'package:dpwg_movil/app/data/preference.service.dart';
import 'package:dpwg_movil/models/index.dart';
import 'package:get/get.dart';

class SelectProfileController extends GetxController {
  //TODO: Implement SelectProfileController

  final profiles = <UserProfile>[].obs;

  final userLoged = MedicalStaff().obs;
  final isLoading = true.obs;
  final selected = int.parse('0').obs;

  @override
  void onInit() {
    super.onInit();
    getInitialData();
  }

  Future<void> getInitialData() async {

    userLoged.value = await PreferenceService.getSession();

    profiles.value = userLoged.value.profiles ?? [];

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
