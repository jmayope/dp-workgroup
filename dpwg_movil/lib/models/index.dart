export 'service_delivery_institution.dart';
export 'vaccine.dart';
export 'user_health_establishment.dart';
export 'profile.dart';
export 'type_list.dart';
export 'medical_staff.dart';
export 'campaign.dart';
export 'user_profile.dart';
import 'package:quiver/core.dart';

T? checkOptional<T>(Optional<T?>? optional, T? Function()? def) {
  // No value given, just take default value
  if (optional == null) return def?.call();

  // We have an input value
  if (optional.isPresent) return optional.value;

  // We have a null inside the optional
  return null;
}
