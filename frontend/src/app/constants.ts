import moment from "moment";
import Swal, { SweetAlertOptions } from "sweetalert2";

export const API_URI = 'http://localhost:3000/api';
// export const API_URI = 'http://192.168.1.18:3000/api';
export const API_URI_RENIEC = 'https://dniruc.apisperu.com';
export const TOKEN_RENIEC = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImpvcmdlbWF5by5wZUBnbWFpbC5jb20iLCJqdGkiOiJhNmVlMWNhMDNlMGViZWY0In0.lddwmw4av0lcR-LNVdQPd0atCXPLNH4sprbe8SlhqXI';

export const SUPABASE_URL = "https://mvxkmaqhfxxfnxrxmqvr.supabase.co/rest/v1/";
export const SUPABASE_API_KEY = "sb_publishable_vkT5u5R7-cPAcNDTKqtt6w_rkmZ5Z50";

export const COLLECTIONS = {
  SPECIALTIES: 'specialties',
  PROFILES: 'profiles',
  MENUS: 'menus',
  PROFILE_MENUS: 'profile_menus',
  TYPE_LISTS: 'type_lists',
  HEALTH_NETWORKS: 'health_networks',
  SERVICE_DELIVERY_INSTITUTIONS: 'service_delivery_institutions',
  MEDICAL_STAFF: 'medical_staff',
  MEDICAL_STAFF_ESTABLISHMENTS: 'medical_staff_establishments',
  MEDICAL_STAFF_PROFILES: 'medical_staff_profiles',
  PATIENTS: 'patients',
  MEDICAL_HISTORIES: 'medical_histories',
  HISTORY_DETAIL: 'history_detail',
  VACCINES: 'vaccines',
  GROWTH_STAGES: 'growth_stages',
  GROWTH_STAGE_VACCINES: 'growth_stage_vaccines',
  DOSES: 'doses',
  ANTHROPOMETRIC_MEASUREMENTS: 'anthropometric_measurements',
  PATIENT_MEASUREMENTS: 'patient_measurements',
  SPECIALTY_CONTROLS: 'specialty_controls',
  SPECIALTY_PROCESSES: 'specialty_processes',
  PRODUCTS: 'products',
  KARDEX_MASTERS: 'kardex_masters',
  KARDEX: 'kardex',
  AREAS: 'areas',
  AREA_COLLABORATORS: 'area_collaborators',
  CAMPAIGNS: 'campaigns',
  CAMPAIGN_MOVEMENTS: 'campaign_movements'
};

export const TOKEN_NAME = 'serenaToken';
export const APP_NAME = 'HistoricApp';
export const DOMAIN = "psminsa.bio.pe";
export const SLUG = 'Backoffice - Puestos de Salud';

export const NUMBER_ROWS = [20,50,100,500];

export const TOTAL_DAYS_IN_WEEK = 7;
export const INTENT_MAX_PASSWORD = 3;
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
  
  
export function handleAlphanumeric(event: KeyboardEvent) {
  const allowedKeys = [
    'Backspace',
    'Delete',
    'Tab',
    'ArrowLeft',
    'ArrowRight',
    'Home',
    'End'
  ];

  if (
    allowedKeys.includes(event.key) ||
    /^[a-zA-Z0-9._%+\-@]$/.test(event.key)
  ) {
    return;
  }

  event.preventDefault();
}

export function handleLetter(event: KeyboardEvent) {
  const allowedKeys = [
    'Backspace',
    'Delete',
    'Tab',
    'ArrowLeft',
    'ArrowRight',
    'Home',
    'End'
  ];

  if (
    allowedKeys.includes(event.key) ||
    /^[a-zA-Z ]$/.test(event.key)
  ) {
    return;
  }

  event.preventDefault();
}

export function handleNumber(event: KeyboardEvent) {
  const allowedKeys = [
    'Backspace',
    'Delete',
    'Tab',
    'ArrowLeft',
    'ArrowRight',
    'Home',
    'End'
  ];

  if (
    allowedKeys.includes(event.key) ||
    /^[0-9]$/.test(event.key)
  ) {
    return;
  }

  event.preventDefault();
}