import 'package:dpwg_movil/app/data/dio.client.dart';
import 'package:dpwg_movil/app/data/preference.service.dart';
import 'package:flutter/material.dart';

import 'package:get/get.dart';

import 'app/routes/app_pages.dart';

void main() async {
  // Inicializar DioClient (registrar interceptores)
  DioClient.init();
  
  // Intentar restaurar el token de la sesión local
  final session = await PreferenceService.getSession();
  if (session.token != null) {
    await DioClient.updateToken(session.token!);
  }

  runApp(
    GetMaterialApp(
      title: "Application",
      initialRoute: AppPages.INITIAL,
      getPages: AppPages.routes,
      debugShowCheckedModeBanner: false,
    ),
  );
}
