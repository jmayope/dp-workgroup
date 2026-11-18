import 'dart:math';
import 'package:dpwg_movil/app/theme/app_colors.dart';
import 'package:flutter/material.dart';

String formatDate(DateTime date) {
  const months = [
    'ene', 'feb', 'mar', 'abr', 'may', 'jun',
    'jul', 'ago', 'sep', 'oct', 'nov', 'dic',
  ];
  return '${date.day} de ${months[date.month - 1]} de ${date.year}';
}

const List<Color> profileColors = [
  AppColors.navy,
  AppColors.safe,
  AppColors.warn,
  AppColors.navyLight,
];



String formatDateToYYYYMMDD(DateTime date) {
  return date.toIso8601String().split('T')[0];
}

String formatDateToISOWithTimezone(DateTime date) {
  return date.toIso8601String();
}

String capitalizeWords(String text) {
  return text
      .split(' ')
      .map((word) => word.isEmpty
          ? word
          : word[0].toUpperCase() + word.substring(1))
      .join(' ');
}

String timeAgo(DateTime dateTime) {
  final now = DateTime.now();
  final difference = dateTime.difference(now);

  final isFuture = difference.isNegative == false;
  final duration = difference.abs();

  if (duration.inSeconds < 60) {
    return isFuture ? 'En unos momentos' : 'Hace unos momentos';
  }

  if (duration.inMinutes < 60) {
    final minutes = duration.inMinutes;
    return isFuture ? 'En ${minutes} min' : 'Hace ${minutes} min';
  }

  if (duration.inHours < 24) {
    final hours = duration.inHours;
    return isFuture ? 'En ${hours} h' : 'Hace ${hours} h';
  }

  if (duration.inDays == 1) {
    return isFuture ? 'Mañana' : 'Ayer';
  }

  if (duration.inDays < 7) {
    final days = duration.inDays;
    return isFuture ? 'En ${days} días' : 'Hace ${days} días';
  }

  if (duration.inDays < 30) {
    final weeks = (duration.inDays / 7).floor();
    return isFuture ? 'En ${weeks} sem.' : 'Hace ${weeks} sem.';
  }

  if (duration.inDays < 365) {
    final months = (duration.inDays / 30).floor();
    return isFuture ? 'En ${months} meses' : 'Hace ${months} meses';
  }

  final years = (duration.inDays / 365).floor();
  return isFuture ? 'En ${years} años' : 'Hace ${years} años';
}

Color getRandomColor() {
  final random = Random();

  return Color.fromARGB(
    255,
    random.nextInt(256),
    random.nextInt(256),
    random.nextInt(256),
  );
}

const String TOKEN_NAME = "smt_token";