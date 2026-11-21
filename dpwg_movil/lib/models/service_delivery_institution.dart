import 'package:flutter/foundation.dart';
import 'package:quiver/core.dart';

import 'index.dart';

@immutable
class ServiceDeliveryInstitution {

  const ServiceDeliveryInstitution({
    this.name,
    this.code,
    this.ruc,
    this.description,
    this.openAllDay,
    this.address,
    this.reference,
    this.department,
    this.province,
    this.district,
    this.ubigeo,
    this.phone,
    this.cellphone,
    this.email,
    this.website,
    this.logo,
    this.status,
  });

  final String? name;
  final String? code;
  final String? ruc;
  final String? description;
  final bool? openAllDay;
  final String? address;
  final String? reference;
  final String? department;
  final String? province;
  final String? district;
  final String? ubigeo;
  final String? phone;
  final String? cellphone;
  final String? email;
  final String? website;
  final String? logo;
  final bool? status;

  factory ServiceDeliveryInstitution.fromJson(Map<String,dynamic> json) => ServiceDeliveryInstitution(
    name: json['name']?.toString(),
    code: json['code']?.toString(),
    ruc: json['ruc']?.toString(),
    description: json['description']?.toString(),
    openAllDay: json['openAllDay'] != null ? json['openAllDay'] as bool : null,
    address: json['address']?.toString(),
    reference: json['reference']?.toString(),
    department: json['department']?.toString(),
    province: json['province']?.toString(),
    district: json['district']?.toString(),
    ubigeo: json['ubigeo']?.toString(),
    phone: json['phone']?.toString(),
    cellphone: json['cellphone']?.toString(),
    email: json['email']?.toString(),
    website: json['website']?.toString(),
    logo: json['logo']?.toString(),
    status: json['status'] != null ? json['status'] as bool : null
  );
  
  Map<String, dynamic> toJson() => {
    'name': name,
    'code': code,
    'ruc': ruc,
    'description': description,
    'openAllDay': openAllDay,
    'address': address,
    'reference': reference,
    'department': department,
    'province': province,
    'district': district,
    'ubigeo': ubigeo,
    'phone': phone,
    'cellphone': cellphone,
    'email': email,
    'website': website,
    'logo': logo,
    'status': status
  };

  ServiceDeliveryInstitution clone() => ServiceDeliveryInstitution(
    name: name,
    code: code,
    ruc: ruc,
    description: description,
    openAllDay: openAllDay,
    address: address,
    reference: reference,
    department: department,
    province: province,
    district: district,
    ubigeo: ubigeo,
    phone: phone,
    cellphone: cellphone,
    email: email,
    website: website,
    logo: logo,
    status: status
  );


  ServiceDeliveryInstitution copyWith({
    Optional<String?>? name,
    Optional<String?>? code,
    Optional<String?>? ruc,
    Optional<String?>? description,
    Optional<bool?>? openAllDay,
    Optional<String?>? address,
    Optional<String?>? reference,
    Optional<String?>? department,
    Optional<String?>? province,
    Optional<String?>? district,
    Optional<String?>? ubigeo,
    Optional<String?>? phone,
    Optional<String?>? cellphone,
    Optional<String?>? email,
    Optional<String?>? website,
    Optional<String?>? logo,
    Optional<bool?>? status
  }) => ServiceDeliveryInstitution(
    name: checkOptional(name, () => this.name),
    code: checkOptional(code, () => this.code),
    ruc: checkOptional(ruc, () => this.ruc),
    description: checkOptional(description, () => this.description),
    openAllDay: checkOptional(openAllDay, () => this.openAllDay),
    address: checkOptional(address, () => this.address),
    reference: checkOptional(reference, () => this.reference),
    department: checkOptional(department, () => this.department),
    province: checkOptional(province, () => this.province),
    district: checkOptional(district, () => this.district),
    ubigeo: checkOptional(ubigeo, () => this.ubigeo),
    phone: checkOptional(phone, () => this.phone),
    cellphone: checkOptional(cellphone, () => this.cellphone),
    email: checkOptional(email, () => this.email),
    website: checkOptional(website, () => this.website),
    logo: checkOptional(logo, () => this.logo),
    status: checkOptional(status, () => this.status),
  );

  @override
  bool operator ==(Object other) => identical(this, other)
    || other is ServiceDeliveryInstitution && name == other.name && code == other.code && ruc == other.ruc && description == other.description && openAllDay == other.openAllDay && address == other.address && reference == other.reference && department == other.department && province == other.province && district == other.district && ubigeo == other.ubigeo && phone == other.phone && cellphone == other.cellphone && email == other.email && website == other.website && logo == other.logo && status == other.status;

  @override
  int get hashCode => name.hashCode ^ code.hashCode ^ ruc.hashCode ^ description.hashCode ^ openAllDay.hashCode ^ address.hashCode ^ reference.hashCode ^ department.hashCode ^ province.hashCode ^ district.hashCode ^ ubigeo.hashCode ^ phone.hashCode ^ cellphone.hashCode ^ email.hashCode ^ website.hashCode ^ logo.hashCode ^ status.hashCode;
}
