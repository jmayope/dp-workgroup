import moment from "moment";
import Swal, { SweetAlertOptions } from "sweetalert2";

export const API_URI = 'http://localhost:3000/api';
// export const API_URI = 'http://192.168.1.18:3000/api';

export const TOKEN_NAME = 'serenaToken';
export const APP_NAME = 'HistoricApp';
export const DOMAIN = "psminsa.bio.pe";
export const SLUG = 'Backoffice - Puestos de Salud';

export const NUMBER_ROWS = [20,50,100,500];

export const TOTAL_DAYS_IN_WEEK = 7;
export const DAYS = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];

export function buildPagination(total: number, rows: number) {
    let pages = [];
    for (let p = 1; p <= Math.ceil(total / rows); p++) {
      pages.push(p);
    }
    return pages;
}

export function generateRandomString(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export function parseDate(date: any) {
  return moment(`${date}T12:00:00-05:00`);
}

export function parseDateToString(date: any) {
  return moment(date).format('YYYY-MM-DD');
}

export function messageAlert(title: any, message: string, icon: string) {
  let icons: any = {
    'success': 'success',
    'error': 'error',
    'warning': 'warning',
    'info': 'info',
  }
  Swal.fire({
    text: message,
    icon: icons[icon]
  });
}

export const GENDERS = [
  {_id: 'M', name: 'Hombre' },
  {_id: 'F', name: 'Femenino' },
  {_id: 'O', name: 'Otro - No especificado' },
];
  