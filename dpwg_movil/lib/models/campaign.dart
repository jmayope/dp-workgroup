import 'package:flutter/foundation.dart';
import 'package:quiver/core.dart';

import 'index.dart';

@immutable
class Campaign {

  const Campaign({
    this.serviceDeliveryInstitution,
    this.name,
    this.campaignType,
    this.startDate,
    this.finishDate,
    this.usageExternalForm,
    this.urlExternalForm,
    this.campaignStatus,
    this.status,
    this.createAt,
  });

  final ServiceDeliveryInstitution? serviceDeliveryInstitution;
  final String? name;
  final TypeList? campaignType;
  final DateTime? startDate;
  final DateTime? finishDate;
  final bool? usageExternalForm;
  final String? urlExternalForm;
  final TypeList? campaignStatus;
  final bool? status;
  final DateTime? createAt;

  factory Campaign.fromJson(Map<String,dynamic> json) => Campaign(
    serviceDeliveryInstitution: json['serviceDeliveryInstitution'] != null ? ServiceDeliveryInstitution.fromJson(json['serviceDeliveryInstitution'] as Map<String, dynamic>) : null,
    name: json['name']?.toString(),
    campaignType: json['campaignType'] != null ? TypeList.fromJson(json['campaignType'] as Map<String, dynamic>) : null,
    startDate: json['startDate'] != null ? DateTime.parse(json['startDate'] as String) : null,
    finishDate: json['finishDate'] != null ? DateTime.parse(json['finishDate'] as String) : null,
    usageExternalForm: json['usageExternalForm'] != null ? json['usageExternalForm'] as bool : null,
    urlExternalForm: json['urlExternalForm']?.toString(),
    campaignStatus: json['campaignStatus'] != null ? TypeList.fromJson(json['campaignStatus'] as Map<String, dynamic>) : null,
    status: json['status'] != null ? json['status'] as bool : null,
    createAt: json['createAt'] != null ? DateTime.parse(json['createAt'] as String) : null
  );
  
  Map<String, dynamic> toJson() => {
    'serviceDeliveryInstitution': serviceDeliveryInstitution?.toJson(),
    'name': name,
    'campaignType': campaignType?.toJson(),
    'startDate': startDate?.toIso8601String(),
    'finishDate': finishDate?.toIso8601String(),
    'usageExternalForm': usageExternalForm,
    'urlExternalForm': urlExternalForm,
    'campaignStatus': campaignStatus?.toJson(),
    'status': status,
    'createAt': createAt?.toIso8601String()
  };

  Campaign clone() => Campaign(
    serviceDeliveryInstitution: serviceDeliveryInstitution?.clone(),
    name: name,
    campaignType: campaignType?.clone(),
    startDate: startDate,
    finishDate: finishDate,
    usageExternalForm: usageExternalForm,
    urlExternalForm: urlExternalForm,
    campaignStatus: campaignStatus?.clone(),
    status: status,
    createAt: createAt
  );


  Campaign copyWith({
    Optional<ServiceDeliveryInstitution?>? serviceDeliveryInstitution,
    Optional<String?>? name,
    Optional<TypeList?>? campaignType,
    Optional<DateTime?>? startDate,
    Optional<DateTime?>? finishDate,
    Optional<bool?>? usageExternalForm,
    Optional<String?>? urlExternalForm,
    Optional<TypeList?>? campaignStatus,
    Optional<bool?>? status,
    Optional<DateTime?>? createAt
  }) => Campaign(
    serviceDeliveryInstitution: checkOptional(serviceDeliveryInstitution, () => this.serviceDeliveryInstitution),
    name: checkOptional(name, () => this.name),
    campaignType: checkOptional(campaignType, () => this.campaignType),
    startDate: checkOptional(startDate, () => this.startDate),
    finishDate: checkOptional(finishDate, () => this.finishDate),
    usageExternalForm: checkOptional(usageExternalForm, () => this.usageExternalForm),
    urlExternalForm: checkOptional(urlExternalForm, () => this.urlExternalForm),
    campaignStatus: checkOptional(campaignStatus, () => this.campaignStatus),
    status: checkOptional(status, () => this.status),
    createAt: checkOptional(createAt, () => this.createAt),
  );

  @override
  bool operator ==(Object other) => identical(this, other)
    || other is Campaign && serviceDeliveryInstitution == other.serviceDeliveryInstitution && name == other.name && campaignType == other.campaignType && startDate == other.startDate && finishDate == other.finishDate && usageExternalForm == other.usageExternalForm && urlExternalForm == other.urlExternalForm && campaignStatus == other.campaignStatus && status == other.status && createAt == other.createAt;

  @override
  int get hashCode => serviceDeliveryInstitution.hashCode ^ name.hashCode ^ campaignType.hashCode ^ startDate.hashCode ^ finishDate.hashCode ^ usageExternalForm.hashCode ^ urlExternalForm.hashCode ^ campaignStatus.hashCode ^ status.hashCode ^ createAt.hashCode;
}
