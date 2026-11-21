import 'package:flutter/foundation.dart';
import 'package:quiver/core.dart';

import 'index.dart';

@immutable
class Patient {

  const Patient({
    this.code,
    this.firstName,
    this.paternalSurname,
    this.maternalSurname,
    this.dateOfBirth,
    this.address,
    this.phone,
    this.email,
    this.gender,
    this.bloodType,
    this.status,
  });

  final String? code;
  final String? firstName;
  final String? paternalSurname;
  final String? maternalSurname;
  final DateTime? dateOfBirth;
  final String? address;
  final String? phone;
  final String? email;
  final String? gender;
  final String? bloodType;
  final bool? status;

  factory Patient.fromJson(Map<String,dynamic> json) => Patient(
    code: json['code']?.toString(),
    firstName: json['firstName']?.toString(),
    paternalSurname: json['paternalSurname']?.toString(),
    maternalSurname: json['maternalSurname']?.toString(),
    dateOfBirth: json['dateOfBirth'] != null ? DateTime.parse(json['dateOfBirth'] as String) : null,
    address: json['address']?.toString(),
    phone: json['phone']?.toString(),
    email: json['email']?.toString(),
    gender: json['gender']?.toString(),
    bloodType: json['bloodType']?.toString(),
    status: json['status'] != null ? json['status'] as bool : null
  );
  
  Map<String, dynamic> toJson() => {
    'code': code,
    'firstName': firstName,
    'paternalSurname': paternalSurname,
    'maternalSurname': maternalSurname,
    'dateOfBirth': dateOfBirth?.toIso8601String(),
    'address': address,
    'phone': phone,
    'email': email,
    'gender': gender,
    'bloodType': bloodType,
    'status': status
  };

  Patient clone() => Patient(
    code: code,
    firstName: firstName,
    paternalSurname: paternalSurname,
    maternalSurname: maternalSurname,
    dateOfBirth: dateOfBirth,
    address: address,
    phone: phone,
    email: email,
    gender: gender,
    bloodType: bloodType,
    status: status
  );


  Patient copyWith({
    Optional<String?>? code,
    Optional<String?>? firstName,
    Optional<String?>? paternalSurname,
    Optional<String?>? maternalSurname,
    Optional<DateTime?>? dateOfBirth,
    Optional<String?>? address,
    Optional<String?>? phone,
    Optional<String?>? email,
    Optional<String?>? gender,
    Optional<String?>? bloodType,
    Optional<bool?>? status
  }) => Patient(
    code: checkOptional(code, () => this.code),
    firstName: checkOptional(firstName, () => this.firstName),
    paternalSurname: checkOptional(paternalSurname, () => this.paternalSurname),
    maternalSurname: checkOptional(maternalSurname, () => this.maternalSurname),
    dateOfBirth: checkOptional(dateOfBirth, () => this.dateOfBirth),
    address: checkOptional(address, () => this.address),
    phone: checkOptional(phone, () => this.phone),
    email: checkOptional(email, () => this.email),
    gender: checkOptional(gender, () => this.gender),
    bloodType: checkOptional(bloodType, () => this.bloodType),
    status: checkOptional(status, () => this.status),
  );

  @override
  bool operator ==(Object other) => identical(this, other)
    || other is Patient && code == other.code && firstName == other.firstName && paternalSurname == other.paternalSurname && maternalSurname == other.maternalSurname && dateOfBirth == other.dateOfBirth && address == other.address && phone == other.phone && email == other.email && gender == other.gender && bloodType == other.bloodType && status == other.status;

  @override
  int get hashCode => code.hashCode ^ firstName.hashCode ^ paternalSurname.hashCode ^ maternalSurname.hashCode ^ dateOfBirth.hashCode ^ address.hashCode ^ phone.hashCode ^ email.hashCode ^ gender.hashCode ^ bloodType.hashCode ^ status.hashCode;
}
