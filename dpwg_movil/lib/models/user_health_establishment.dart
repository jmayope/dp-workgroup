import 'package:flutter/foundation.dart';
import 'package:quiver/core.dart';

import 'index.dart';

@immutable
class UserHealthEstablishment {

  const UserHealthEstablishment({
    this.serviceDeliveryInstitution,
    this.startDate,
    this.finishDate,
    this.createAt,
  });

  final ServiceDeliveryInstitution? serviceDeliveryInstitution;
  final DateTime? startDate;
  final DateTime? finishDate;
  final DateTime? createAt;

  factory UserHealthEstablishment.fromJson(Map<String,dynamic> json) => UserHealthEstablishment(
    serviceDeliveryInstitution: json['serviceDeliveryInstitution'] != null ? ServiceDeliveryInstitution.fromJson(json['serviceDeliveryInstitution'] as Map<String, dynamic>) : null,
    startDate: json['startDate'] != null ? DateTime.parse(json['startDate'] as String) : null,
    finishDate: json['finishDate'] != null ? DateTime.parse(json['finishDate'] as String) : null,
    createAt: json['createAt'] != null ? DateTime.parse(json['createAt'] as String) : null
  );
  
  Map<String, dynamic> toJson() => {
    'serviceDeliveryInstitution': serviceDeliveryInstitution?.toJson(),
    'startDate': startDate?.toIso8601String(),
    'finishDate': finishDate?.toIso8601String(),
    'createAt': createAt?.toIso8601String()
  };

  UserHealthEstablishment clone() => UserHealthEstablishment(
    serviceDeliveryInstitution: serviceDeliveryInstitution?.clone(),
    startDate: startDate,
    finishDate: finishDate,
    createAt: createAt
  );


  UserHealthEstablishment copyWith({
    Optional<ServiceDeliveryInstitution?>? serviceDeliveryInstitution,
    Optional<DateTime?>? startDate,
    Optional<DateTime?>? finishDate,
    Optional<DateTime?>? createAt
  }) => UserHealthEstablishment(
    serviceDeliveryInstitution: checkOptional(serviceDeliveryInstitution, () => this.serviceDeliveryInstitution),
    startDate: checkOptional(startDate, () => this.startDate),
    finishDate: checkOptional(finishDate, () => this.finishDate),
    createAt: checkOptional(createAt, () => this.createAt),
  );

  @override
  bool operator ==(Object other) => identical(this, other)
    || other is UserHealthEstablishment && serviceDeliveryInstitution == other.serviceDeliveryInstitution && startDate == other.startDate && finishDate == other.finishDate && createAt == other.createAt;

  @override
  int get hashCode => serviceDeliveryInstitution.hashCode ^ startDate.hashCode ^ finishDate.hashCode ^ createAt.hashCode;
}
