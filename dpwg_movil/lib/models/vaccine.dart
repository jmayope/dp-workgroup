import 'package:flutter/foundation.dart';
import 'package:quiver/core.dart';

import 'index.dart';

@immutable
class Vaccine {

  const Vaccine({
    this.name,
    this.code,
    this.description,
    this.status,
    this.createdAt,
    this.createdBy,
    this.updatedAt,
    this.updatedBy,
  });

  final String? name;
  final String? code;
  final String? description;
  final bool? status;
  final DateTime? createdAt;
  final MedicalStaff? createdBy;
  final DateTime? updatedAt;
  final MedicalStaff? updatedBy;

  factory Vaccine.fromJson(Map<String,dynamic> json) => Vaccine(
    name: json['name']?.toString(),
    code: json['code']?.toString(),
    description: json['description']?.toString(),
    status: json['status'] != null ? json['status'] as bool : null,
    createdAt: json['createdAt'] != null ? DateTime.parse(json['createdAt'] as String) : null,
    createdBy: json['createdBy'] != null ? MedicalStaff.fromJson(json['createdBy'] as Map<String, dynamic>) : null,
    updatedAt: json['updatedAt'] != null ? DateTime.parse(json['updatedAt'] as String) : null,
    updatedBy: json['updatedBy'] != null ? MedicalStaff.fromJson(json['updatedBy'] as Map<String, dynamic>) : null
  );
  
  Map<String, dynamic> toJson() => {
    'name': name,
    'code': code,
    'description': description,
    'status': status,
    'createdAt': createdAt?.toIso8601String(),
    'createdBy': createdBy?.toJson(),
    'updatedAt': updatedAt?.toIso8601String(),
    'updatedBy': updatedBy?.toJson()
  };

  Vaccine clone() => Vaccine(
    name: name,
    code: code,
    description: description,
    status: status,
    createdAt: createdAt,
    createdBy: createdBy?.clone(),
    updatedAt: updatedAt,
    updatedBy: updatedBy?.clone()
  );


  Vaccine copyWith({
    Optional<String?>? name,
    Optional<String?>? code,
    Optional<String?>? description,
    Optional<bool?>? status,
    Optional<DateTime?>? createdAt,
    Optional<MedicalStaff?>? createdBy,
    Optional<DateTime?>? updatedAt,
    Optional<MedicalStaff?>? updatedBy
  }) => Vaccine(
    name: checkOptional(name, () => this.name),
    code: checkOptional(code, () => this.code),
    description: checkOptional(description, () => this.description),
    status: checkOptional(status, () => this.status),
    createdAt: checkOptional(createdAt, () => this.createdAt),
    createdBy: checkOptional(createdBy, () => this.createdBy),
    updatedAt: checkOptional(updatedAt, () => this.updatedAt),
    updatedBy: checkOptional(updatedBy, () => this.updatedBy),
  );

  @override
  bool operator ==(Object other) => identical(this, other)
    || other is Vaccine && name == other.name && code == other.code && description == other.description && status == other.status && createdAt == other.createdAt && createdBy == other.createdBy && updatedAt == other.updatedAt && updatedBy == other.updatedBy;

  @override
  int get hashCode => name.hashCode ^ code.hashCode ^ description.hashCode ^ status.hashCode ^ createdAt.hashCode ^ createdBy.hashCode ^ updatedAt.hashCode ^ updatedBy.hashCode;
}
