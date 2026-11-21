import 'package:get/get.dart';

import '../controllers/triage_controller.dart';

class TriageBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<TriageController>(
      () => TriageController(),
    );
  }
}
