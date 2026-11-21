import 'package:flutter/foundation.dart';
import 'package:quiver/core.dart';

import 'index.dart';

@immutable
class Dose {

  const Dose({
    this.number,
    this.name,
    this.description,
    this.status,
    this.createAt,
  });

  final int? number;
  final String? name;
  final String? description;
  final bool? status;
  final DateTime? createAt;

  factory Dose.fromJson(Map<String,dynamic> json) => Dose(
    number: json['number'] != null ? json['number'] as int : null,
    name: json['name']?.toString(),
    description: json['description']?.toString(),
    status: json['status'] != null ? json['status'] as bool : null,
    createAt: json['createAt'] != null ? DateTime.parse(json['createAt'] as String) : null
  );
  
  Map<String, dynamic> toJson() => {
    'number': number,
    'name': name,
    'description': description,
    'status': status,
    'createAt': createAt?.toIso8601String()
  };

  Dose clone() => Dose(
    number: number,
    name: name,
    description: description,
    status: status,
    createAt: createAt
  );


  Dose copyWith({
    Optional<int?>? number,
    Optional<String?>? name,
    Optional<String?>? description,
    Optional<bool?>? status,
    Optional<DateTime?>? createAt
  }) => Dose(
    number: checkOptional(number, () => this.number),
    name: checkOptional(name, () => this.name),
    description: checkOptional(description, () => this.description),
    status: checkOptional(status, () => this.status),
    createAt: checkOptional(createAt, () => this.createAt),
  );

  @override
  bool operator ==(Object other) => identical(this, other)
    || other is Dose && number == other.number && name == other.name && description == other.description && status == other.status && createAt == other.createAt;

  @override
  int get hashCode => number.hashCode ^ name.hashCode ^ description.hashCode ^ status.hashCode ^ createAt.hashCode;
}
