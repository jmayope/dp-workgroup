import 'package:dpwg_movil/app/data/main.service.dart';
import 'package:dpwg_movil/app/data/preference.service.dart';
import 'package:dpwg_movil/app/routes/app_pages.dart';
import 'package:dpwg_movil/models/index.dart';
import 'package:flutter/widgets.dart';
import 'package:get/get.dart';
import 'package:quiver/core.dart';

class LoginController extends GetxController {
  //TODO: Implement LoginController

  final email = TextEditingController();
  final password = TextEditingController();
  final showPassword = false.obs;
  final userLoged = MedicalStaff().obs;

  final logging = false.obs;

  final main = Get.put(MainService());

  @override
  void onInit() {
    super.onInit();
  }

  @override
  void onReady() {
    super.onReady();
  }

  @override
  void onClose() {
    super.onClose();
  }
  
  Future<void> login() async {
    // Get.offAllNamed(Routes.SELECT_ENTITY);
    // Get.offAllNamed(Routes.SELECT_PROFILE);
    if (logging.value) return;
    logging.value = true;

    final resultLogin = await main.login(email.value.text, password.value.text);
    if (resultLogin == null) {
      Get.snackbar("Validación", "Credenciales incorrectas");
      return;
    }
    userLoged.value = MedicalStaff.fromJson(resultLogin);
    userLoged.value = userLoged.value.copyWith(
      currentHealthEstablishment: Optional.of(UserHealthEstablishment(
        serviceDeliveryInstitution: ServiceDeliveryInstitution(name: "UPS"),
      )),
      currentProfile: Optional.of(UserProfile(
        profile: Profile(
          name: "Enfermero"
        )
      )),
    );
    print(resultLogin);
    
    logging.value = false;

    bool saved = await PreferenceService.setSession(userLoged.value);
    Get.offAllNamed(Routes.HOME);
  }

}
