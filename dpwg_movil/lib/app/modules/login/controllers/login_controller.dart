import 'package:dpwg_movil/app/data/preference.service.dart';
import 'package:dpwg_movil/app/routes/app_pages.dart';
import 'package:dpwg_movil/models/index.dart';
import 'package:flutter/widgets.dart';
import 'package:get/get.dart';

class LoginController extends GetxController {
  //TODO: Implement LoginController

  final email = TextEditingController();
  final password = TextEditingController();
  final showPassword = false.obs;
  final userLoged = MedicalStaff().obs;
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
    
    userLoged.value = MedicalStaff(
      code: "sdfsadfsadf",
      documentType: "234234234",
      firstName: "Juan",
      lastName: "Perez",
      username: "jperez@gmail.com",
      password: "12345678",
      changedPassword: true,
      profession: "Enfermero",
      currentHealthEstablishment: UserHealthEstablishment(
        serviceDeliveryInstitution: ServiceDeliveryInstitution(name: "UPS"),
      ),
      workingCondition: "Contratado",
      ups: "342342342342",
      status: true,
      blocked: false,
      currentProfile: UserProfile(
        profile: Profile(
          name: "Enfermero"
        )
      ),
      phone: "+51986584585",
      email: "jperez@gmail.com"
    );
    bool saved = await PreferenceService.setSession(userLoged.value);
    Get.offAllNamed(Routes.HOME);
  }

}
