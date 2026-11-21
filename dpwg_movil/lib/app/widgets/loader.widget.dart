import 'package:flutter/material.dart';

class LoaderWidget extends StatelessWidget {
  const new({
    super.key,
    required this.message
  });

  final String message;

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          CircularProgressIndicator(),
          Text(message)
        ],
      ),
    );
  }
}