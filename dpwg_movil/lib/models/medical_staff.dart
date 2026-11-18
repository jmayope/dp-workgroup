import 'package:flutter/foundation.dart';
import 'package:quiver/core.dart';

import 'index.dart';

@immutable
class MedicalStaff {

  const MedicalStaff({
    this.code,
    this.documentType,
    this.firstName,
    this.lastName,
    this.username,
    this.password,
    this.changedPassword,
    this.profession,
    this.healthEstablisments,
    this.workingCondition,
    this.ups,
    this.status,
    this.blocked,
    this.profiles,
    this.phone,
    this.email,
  });

  final String? code;
  final String? documentType;
  final String? firstName;
  final String? lastName;
  final String? username;
  final String? password;
  final bool? changedPassword;
  final String? profession;
  final List<UserHealthEstablishment>? healthEstablisments;
  final String? workingCondition;
  final String? ups;
  final bool? status;
  final bool? blocked;
  final List<UserProfile>? profiles;
  final String? phone;
  final String? email;

  factory MedicalStaff.fromJson(Map<String,dynamic> json) => MedicalStaff(
    code: json['code']?.toString(),
    documentType: json['documentType']?.toString(),
    firstName: json['firstName']?.toString(),
    lastName: json['lastName']?.toString(),
    username: json['username']?.toString(),
    password: json['password']?.toString(),
    changedPassword: json['changedPassword'] != null ? json['changedPassword'] as bool : null,
    profession: json['profession']?.toString(),
    healthEstablisments: json['healthEstablisments'] != null ? (json['healthEstablisments'] as List? ?? []).map((e) => UserHealthEstablishment.fromJson(e as Map<String, dynamic>)).toList() : null,
    workingCondition: json['workingCondition']?.toString(),
    ups: json['ups']?.toString(),
    status: json['status'] != null ? json['status'] as bool : null,
    blocked: json['blocked'] != null ? json['blocked'] as bool : null,
    profiles: json['profiles'] != null ? (json['profiles'] as List? ?? []).map((e) => UserProfile.fromJson(e as Map<String, dynamic>)).toList() : null,
    phone: json['phone']?.toString(),
    email: json['email']?.toString()
  );
  
  Map<String, dynamic> toJson() => {
    'code': code,
    'documentType': documentType,
    'firstName': firstName,
    'lastName': lastName,
    'username': username,
    'password': password,
    'changedPassword': changedPassword,
    'profession': profession,
    'healthEstablisments': healthEstablisments?.map((e) => e.toJson()).toList(),
    'workingCondition': workingCondition,
    'ups': ups,
    'status': status,
    'blocked': blocked,
    'profiles': profiles?.map((e) => e.toJson()).toList(),
    'phone': phone,
    'email': email
  };

  MedicalStaff clone() => MedicalStaff(
    code: code,
    documentType: documentType,
    firstName: firstName,
    lastName: lastName,
    username: username,
    password: password,
    changedPassword: changedPassword,
    profession: profession,
    healthEstablisments: healthEstablisments?.map((e) => e.clone()).toList(),
    workingCondition: workingCondition,
    ups: ups,
    status: status,
    blocked: blocked,
    profiles: profiles?.map((e) => e.clone()).toList(),
    phone: phone,
    email: email
  );


  MedicalStaff copyWith({
    Optional<String?>? code,
    Optional<String?>? documentType,
    Optional<String?>? firstName,
    Optional<String?>? lastName,
    Optional<String?>? username,
    Optional<String?>? password,
    Optional<bool?>? changedPassword,
    Optional<String?>? profession,
    Optional<List<UserHealthEstablishment>?>? healthEstablisments,
    Optional<String?>? workingCondition,
    Optional<String?>? ups,
    Optional<bool?>? status,
    Optional<bool?>? blocked,
    Optional<List<UserProfile>?>? profiles,
    Optional<String?>? phone,
    Optional<String?>? email
  }) => MedicalStaff(
    code: checkOptional(code, () => this.code),
    documentType: checkOptional(documentType, () => this.documentType),
    firstName: checkOptional(firstName, () => this.firstName),
    lastName: checkOptional(lastName, () => this.lastName),
    username: checkOptional(username, () => this.username),
    password: checkOptional(password, () => this.password),
    changedPassword: checkOptional(changedPassword, () => this.changedPassword),
    profession: checkOptional(profession, () => this.profession),
    healthEstablisments: checkOptional(healthEstablisments, () => this.healthEstablisments),
    workingCondition: checkOptional(workingCondition, () => this.workingCondition),
    ups: checkOptional(ups, () => this.ups),
    status: checkOptional(status, () => this.status),
    blocked: checkOptional(blocked, () => this.blocked),
    profiles: checkOptional(profiles, () => this.profiles),
    phone: checkOptional(phone, () => this.phone),
    email: checkOptional(email, () => this.email),
  );

  @override
  bool operator ==(Object other) => identical(this, other)
    || other is MedicalStaff && code == other.code && documentType == other.documentType && firstName == other.firstName && lastName == other.lastName && username == other.username && password == other.password && changedPassword == other.changedPassword && profession == other.profession && healthEstablisments == other.healthEstablisments && workingCondition == other.workingCondition && ups == other.ups && status == other.status && blocked == other.blocked && profiles == other.profiles && phone == other.phone && email == other.email;

  @override
  int get hashCode => code.hashCode ^ documentType.hashCode ^ firstName.hashCode ^ lastName.hashCode ^ username.hashCode ^ password.hashCode ^ changedPassword.hashCode ^ profession.hashCode ^ healthEstablisments.hashCode ^ workingCondition.hashCode ^ ups.hashCode ^ status.hashCode ^ blocked.hashCode ^ profiles.hashCode ^ phone.hashCode ^ email.hashCode;
}
