import 'package:flutter/foundation.dart';
import 'package:quiver/core.dart';

import 'index.dart';

@immutable
class Profile {

  const Profile({
    this.name,
    this.shortName,
    this.description,
    this.status,
  });

  final String? name;
  final String? shortName;
  final String? description;
  final bool? status;

  factory Profile.fromJson(Map<String,dynamic> json) => Profile(
    name: json['name']?.toString(),
    shortName: json['shortName']?.toString(),
    description: json['description']?.toString(),
    status: json['status'] != null ? json['status'] as bool : null
  );
  
  Map<String, dynamic> toJson() => {
    'name': name,
    'shortName': shortName,
    'description': description,
    'status': status
  };

  Profile clone() => Profile(
    name: name,
    shortName: shortName,
    description: description,
    status: status
  );


  Profile copyWith({
    Optional<String?>? name,
    Optional<String?>? shortName,
    Optional<String?>? description,
    Optional<bool?>? status
  }) => Profile(
    name: checkOptional(name, () => this.name),
    shortName: checkOptional(shortName, () => this.shortName),
    description: checkOptional(description, () => this.description),
    status: checkOptional(status, () => this.status),
  );

  @override
  bool operator ==(Object other) => identical(this, other)
    || other is Profile && name == other.name && shortName == other.shortName && description == other.description && status == other.status;

  @override
  int get hashCode => name.hashCode ^ shortName.hashCode ^ description.hashCode ^ status.hashCode;
}
