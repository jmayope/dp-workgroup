import 'package:get/get.dart';

import '../modules/home/bindings/home_binding.dart';
import '../modules/home/views/home_view.dart';
import '../modules/login/bindings/login_binding.dart';
import '../modules/login/views/login_view.dart';
import '../modules/select_entity/bindings/select_entity_binding.dart';
import '../modules/select_entity/views/select_entity_view.dart';
import '../modules/select_profile/bindings/select_profile_binding.dart';
import '../modules/select_profile/views/select_profile_view.dart';
import '../modules/triage/bindings/triage_binding.dart';
import '../modules/triage/views/triage_view.dart';
import '../modules/unlock_user/bindings/unlock_user_binding.dart';
import '../modules/unlock_user/views/unlock_user_view.dart';
import '../modules/vaccine_application/bindings/vaccine_application_binding.dart';
import '../modules/vaccine_application/views/vaccine_application_view.dart';

part 'app_routes.dart';

class AppPages {
  AppPages._();

  static const INITIAL = Routes.LOGIN;

  static final routes = [
    GetPage(
      name: _Paths.HOME,
      page: () => const HomeView(),
      binding: HomeBinding(),
    ),
    GetPage(
      name: _Paths.LOGIN,
      page: () => const LoginView(),
      binding: LoginBinding(),
    ),
    GetPage(
      name: _Paths.UNLOCK_USER,
      page: () => const UnlockUserView(),
      binding: UnlockUserBinding(),
    ),
    GetPage(
      name: _Paths.SELECT_ENTITY,
      page: () => const SelectEntityView(),
      binding: SelectEntityBinding(),
    ),
    GetPage(
      name: _Paths.SELECT_PROFILE,
      page: () => const SelectProfileView(),
      binding: SelectProfileBinding(),
    ),
    GetPage(
      name: _Paths.VACCINE_APPLICATION,
      page: () => const VaccineApplicationView(),
      binding: VaccineApplicationBinding(),
    ),
    GetPage(
      name: _Paths.TRIAGE,
      page: () => const TriageView(),
      binding: TriageBinding(),
    ),
  ];
}
