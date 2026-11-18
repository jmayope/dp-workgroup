import 'package:flutter/material.dart';

import 'package:get/get.dart';

import '../controllers/unlock_user_controller.dart';

class UnlockUserView extends GetView<UnlockUserController> {
  const UnlockUserView({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('UnlockUserView'),
        centerTitle: true,
      ),
      body: const Center(
        child: Text(
          'UnlockUserView is working',
          style: TextStyle(fontSize: 20),
        ),
      ),
    );
  }
}
