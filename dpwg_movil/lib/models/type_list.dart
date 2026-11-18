import 'package:flutter/foundation.dart';
import 'package:quiver/core.dart';

import 'index.dart';

@immutable
class TypeList {

  const TypeList({
    this.type,
    this.code,
    this.name,
    this.description,
    this.valueToCalculate,
    this.additionalFields,
    this.status,
  });

  final String? type;
  final String? code;
  final String? name;
  final String? description;
  final double? valueToCalculate;
  final String? additionalFields;
  final bool? status;

  factory TypeList.fromJson(Map<String,dynamic> json) => TypeList(
    type: json['type']?.toString(),
    code: json['code']?.toString(),
    name: json['name']?.toString(),
    description: json['description']?.toString(),
    valueToCalculate: json['valueToCalculate'] != null ? (json['valueToCalculate'] as num).toDouble() : null,
    additionalFields: json['additionalFields']?.toString(),
    status: json['status'] != null ? json['status'] as bool : null
  );
  
  Map<String, dynamic> toJson() => {
    'type': type,
    'code': code,
    'name': name,
    'description': description,
    'valueToCalculate': valueToCalculate,
    'additionalFields': additionalFields,
    'status': status
  };

  TypeList clone() => TypeList(
    type: type,
    code: code,
    name: name,
    description: description,
    valueToCalculate: valueToCalculate,
    additionalFields: additionalFields,
    status: status
  );


  TypeList copyWith({
    Optional<String?>? type,
    Optional<String?>? code,
    Optional<String?>? name,
    Optional<String?>? description,
    Optional<double?>? valueToCalculate,
    Optional<String?>? additionalFields,
    Optional<bool?>? status
  }) => TypeList(
    type: checkOptional(type, () => this.type),
    code: checkOptional(code, () => this.code),
    name: checkOptional(name, () => this.name),
    description: checkOptional(description, () => this.description),
    valueToCalculate: checkOptional(valueToCalculate, () => this.valueToCalculate),
    additionalFields: checkOptional(additionalFields, () => this.additionalFields),
    status: checkOptional(status, () => this.status),
  );

  @override
  bool operator ==(Object other) => identical(this, other)
    || other is TypeList && type == other.type && code == other.code && name == other.name && description == other.description && valueToCalculate == other.valueToCalculate && additionalFields == other.additionalFields && status == other.status;

  @override
  int get hashCode => type.hashCode ^ code.hashCode ^ name.hashCode ^ description.hashCode ^ valueToCalculate.hashCode ^ additionalFields.hashCode ^ status.hashCode;
}
