import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/vaccine_application_controller.dart';

class VaccineApplicationView extends GetView<VaccineApplicationController> {
  const VaccineApplicationView({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('VaccineApplicationView'),
        centerTitle: true,
      ),
      body: const Center(
        child: Text(
          'VaccineApplicationView is working',
          style: TextStyle(fontSize: 20),
        ),
      ),
    );
  }
}
