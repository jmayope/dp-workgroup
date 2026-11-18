import 'package:flutter/foundation.dart';
import 'package:quiver/core.dart';

import 'index.dart';

@immutable
class UserProfile {

  const UserProfile({
    this.profile,
    this.serviceDeliveryInstitution,
    this.status,
  });

  final Profile? profile;
  final ServiceDeliveryInstitution? serviceDeliveryInstitution;
  final bool? status;

  factory UserProfile.fromJson(Map<String,dynamic> json) => UserProfile(
    profile: json['profile'] != null ? Profile.fromJson(json['profile'] as Map<String, dynamic>) : null,
    serviceDeliveryInstitution: json['serviceDeliveryInstitution'] != null ? ServiceDeliveryInstitution.fromJson(json['serviceDeliveryInstitution'] as Map<String, dynamic>) : null,
    status: json['status'] != null ? json['status'] as bool : null
  );
  
  Map<String, dynamic> toJson() => {
    'profile': profile?.toJson(),
    'serviceDeliveryInstitution': serviceDeliveryInstitution?.toJson(),
    'status': status
  };

  UserProfile clone() => UserProfile(
    profile: profile?.clone(),
    serviceDeliveryInstitution: serviceDeliveryInstitution?.clone(),
    status: status
  );


  UserProfile copyWith({
    Optional<Profile?>? profile,
    Optional<ServiceDeliveryInstitution?>? serviceDeliveryInstitution,
    Optional<bool?>? status
  }) => UserProfile(
    profile: checkOptional(profile, () => this.profile),
    serviceDeliveryInstitution: checkOptional(serviceDeliveryInstitution, () => this.serviceDeliveryInstitution),
    status: checkOptional(status, () => this.status),
  );

  @override
  bool operator ==(Object other) => identical(this, other)
    || other is UserProfile && profile == other.profile && serviceDeliveryInstitution == other.serviceDeliveryInstitution && status == other.status;

  @override
  int get hashCode => profile.hashCode ^ serviceDeliveryInstitution.hashCode ^ status.hashCode;
}
