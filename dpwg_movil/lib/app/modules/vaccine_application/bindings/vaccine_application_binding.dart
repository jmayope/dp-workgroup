import 'package:get/get.dart';

import '../controllers/vaccine_application_controller.dart';

class VaccineApplicationBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<VaccineApplicationController>(
      () => VaccineApplicationController(),
    );
  }
}
