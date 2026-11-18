import 'package:get/get.dart';

import '../controllers/unlock_user_controller.dart';

class UnlockUserBinding extends Bindings {
  @override
  void dependencies() {
    Get.lazyPut<UnlockUserController>(
      () => UnlockUserController(),
    );
  }
}
