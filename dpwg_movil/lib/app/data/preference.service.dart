import 'dart:convert';

import 'package:dpwg_movil/app/data/constants.dart';
import 'package:dpwg_movil/models/index.dart';

import 'package:shared_preferences/shared_preferences.dart';

class PreferenceService {
  
  static Future<bool> setSession(MedicalStaff user) async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(TOKEN_NAME, jsonEncode(user.toJson()));
    return true;
  }

  static Future<MedicalStaff> getSession() async {
    final prefs = await SharedPreferences.getInstance();
    final raw = prefs.getString(TOKEN_NAME) ?? '{}';
    return MedicalStaff.fromJson(jsonDecode(raw));
  }

  static Future<void> clearAll() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.clear();
  }
}