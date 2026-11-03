-- Modelo relacional Supabase / PostgreSQL
-- Derivado de los schemas Mongoose proporcionados.
-- Convención: snake_case, UUID, TIMESTAMPTZ y JSONB para estructuras dinámicas.
-- Ejecutar en Supabase SQL Editor sobre una base nueva.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- =========================================================
-- 1. CATÁLOGOS Y SEGURIDAD
-- =========================================================

CREATE TABLE IF NOT EXISTS specialties (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  short_name TEXT,
  description TEXT,
  specialty_id UUID REFERENCES specialties(id) ON DELETE SET NULL,
  status BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS menus (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  identifier TEXT,
  name TEXT NOT NULL,
  icon TEXT,
  status BOOLEAN NOT NULL DEFAULT TRUE,
  url TEXT,
  parent_id UUID REFERENCES menus(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS profile_menus (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  menu_id UUID NOT NULL REFERENCES menus(id) ON DELETE CASCADE,
  profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (menu_id, profile_id)
);

CREATE TABLE IF NOT EXISTS type_lists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL,
  code TEXT NOT NULL,
  name TEXT,
  description TEXT,
  value_to_calculate NUMERIC,
  additional_fields JSONB NOT NULL DEFAULT '{}'::jsonb,
  status BOOLEAN NOT NULL DEFAULT TRUE,
  UNIQUE (type, code)
);

-- =========================================================
-- 2. ESTABLECIMIENTOS Y PERSONAL
-- =========================================================

CREATE TABLE IF NOT EXISTS health_networks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  abbr TEXT,
  description TEXT,
  status BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS service_delivery_institutions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  code TEXT,
  type_institution_id UUID REFERENCES type_lists(id) ON DELETE SET NULL,
  category_id UUID REFERENCES type_lists(id) ON DELETE SET NULL,
  ruc TEXT,
  establishment_managers JSONB NOT NULL DEFAULT '[]'::jsonb,
  description TEXT,
  open_all_day BOOLEAN NOT NULL DEFAULT FALSE,
  opening_hours JSONB NOT NULL DEFAULT '[]'::jsonb,
  address TEXT,
  reference TEXT,
  department TEXT,
  province TEXT,
  district TEXT,
  ubigeo TEXT,
  phone TEXT,
  cellphone TEXT,
  email TEXT,
  website TEXT,
  logo TEXT,
  available_services JSONB NOT NULL DEFAULT '[]'::jsonb,
  status BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS medical_staff (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT,
  document_type TEXT,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  username TEXT UNIQUE,
  password TEXT,
  changed_password BOOLEAN NOT NULL DEFAULT FALSE,
  profession TEXT,
  working_condition TEXT,
  ups TEXT,
  status BOOLEAN NOT NULL DEFAULT TRUE,
  phone TEXT,
  email TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS medical_staff_establishments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  medical_staff_id UUID NOT NULL REFERENCES medical_staff(id) ON DELETE CASCADE,
  service_delivery_institution_id UUID NOT NULL REFERENCES service_delivery_institutions(id) ON DELETE CASCADE,
  start_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  finish_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS medical_staff_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  medical_staff_id UUID NOT NULL REFERENCES medical_staff(id) ON DELETE CASCADE,
  profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  service_delivery_institution_id UUID REFERENCES service_delivery_institutions(id) ON DELETE SET NULL,
  status BOOLEAN NOT NULL DEFAULT TRUE,
  UNIQUE (medical_staff_id, profile_id, service_delivery_institution_id)
);

-- =========================================================
-- 3. PACIENTES E HISTORIA CLÍNICA
-- =========================================================

CREATE TABLE IF NOT EXISTS patients (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT,
  first_name TEXT NOT NULL,
  paternal_surname TEXT NOT NULL,
  maternal_surname TEXT NOT NULL,
  date_of_birth DATE NOT NULL,
  address TEXT,
  phone TEXT,
  email TEXT,
  health_network_id UUID REFERENCES health_networks(id) ON DELETE SET NULL,
  service_delivery_institution_id UUID REFERENCES service_delivery_institutions(id) ON DELETE SET NULL,
  gender TEXT CHECK (gender IN ('M', 'F', 'O')),
  blood_type TEXT CHECK (blood_type IN ('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')),
  status BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS medical_histories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code TEXT,
  creation_date TIMESTAMPTZ NOT NULL DEFAULT now(),
  patient_id UUID NOT NULL REFERENCES patients(id) ON DELETE CASCADE,
  status BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS history_detail(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  medical_history_id UUID NOT NULL REFERENCES medical_histories(id) ON DELETE CASCADE,
  diagnostic_number INTEGER,
  type TEXT,
  activity TEXT,
  medical_staff_id UUID NOT NULL REFERENCES medical_staff(id) ON DELETE CASCADE,
  attention_date DATE NOT NULL,
  laboratory TEXT,
  observation TEXT,
  status BOOLEAN NOT NULL DEFAULT TRUE,
  create_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- =========================================================
-- 4. VACUNACIÓN, ETAPAS Y MEDICIONES
-- =========================================================

CREATE TABLE IF NOT EXISTS vaccines (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT,
  code TEXT UNIQUE,
  description TEXT,
  status BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by UUID REFERENCES medical_staff(id) ON DELETE SET NULL,
  updated_at TIMESTAMPTZ,
  updated_by UUID REFERENCES medical_staff(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS growth_stages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  status BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS growth_stage_vaccines (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  growth_stage_id UUID NOT NULL REFERENCES growth_stages(id) ON DELETE CASCADE,
  vaccine_id UUID NOT NULL REFERENCES vaccines(id) ON DELETE CASCADE,
  UNIQUE (growth_stage_id, vaccine_id)
);

CREATE TABLE IF NOT EXISTS doses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  vaccine_id UUID REFERENCES type_lists(id) ON DELETE SET NULL,
  number NUMERIC,
  name TEXT,
  growth_stage_id UUID REFERENCES growth_stages(id) ON DELETE SET NULL,
  description TEXT,
  status BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS anthropometric_measurements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  measurement_unit TEXT,
  category TEXT,
  status BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS patient_measurements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  growth_stage_id UUID REFERENCES growth_stages(id) ON DELETE SET NULL,
  anthropometric_measurement_id UUID REFERENCES anthropometric_measurements(id) ON DELETE SET NULL,
  values JSONB NOT NULL DEFAULT '{}'::jsonb,
  status BOOLEAN NOT NULL DEFAULT TRUE,
  obs TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- =========================================================
-- 5. ESPECIALIDADES Y CONTROLES
-- =========================================================

CREATE TABLE IF NOT EXISTS specialty_controls (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  specialty_id UUID REFERENCES specialties(id) ON DELETE SET NULL,
  growth_stage_id UUID REFERENCES growth_stages(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  "order" INTEGER,
  description TEXT,
  tag TEXT,
  minimum_range NUMERIC,
  maximum_range NUMERIC,
  status BOOLEAN,
  CHECK (minimum_range IS NULL OR maximum_range IS NULL OR minimum_range <= maximum_range)
);

CREATE TABLE IF NOT EXISTS specialty_processes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  specialty_id UUID REFERENCES specialties(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- =========================================================
-- 6. PRODUCTOS, INVENTARIO Y KARDEX
-- =========================================================

CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID NOT NULL REFERENCES type_lists(id) ON DELETE RESTRICT,
  code TEXT,
  name TEXT,
  description TEXT,
  measurement_unit_id UUID REFERENCES type_lists(id) ON DELETE SET NULL,
  minimum_stock NUMERIC,
  location TEXT,
  provider TEXT,
  status BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by UUID REFERENCES medical_staff(id) ON DELETE SET NULL,
  updated_at TIMESTAMPTZ,
  updated_by UUID REFERENCES medical_staff(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS kardex_masters (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
  service_delivery_institution_id UUID REFERENCES service_delivery_institutions(id) ON DELETE SET NULL,
  available_stock NUMERIC,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by UUID REFERENCES medical_staff(id) ON DELETE SET NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_by UUID REFERENCES medical_staff(id) ON DELETE SET NULL
);

CREATE TABLE IF NOT EXISTS kardex (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE RESTRICT,
  kardex_master_id UUID REFERENCES kardex_masters(id) ON DELETE SET NULL,
  input_type_id UUID NOT NULL REFERENCES type_lists(id) ON DELETE RESTRICT,
  previous_quantity NUMERIC,
  quantity NUMERIC,
  next_quantity NUMERIC,
  reason TEXT,
  assigned_to UUID REFERENCES medical_staff(id) ON DELETE SET NULL,
  status_id UUID REFERENCES type_lists(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_by UUID REFERENCES medical_staff(id) ON DELETE SET NULL,
  updated_at TIMESTAMPTZ,
  updated_by UUID REFERENCES medical_staff(id) ON DELETE SET NULL
);

-- =========================================================
-- 7. ÁREAS Y CAMPAÑAS
-- =========================================================

CREATE TABLE IF NOT EXISTS areas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_delivery_institution_id UUID REFERENCES service_delivery_institutions(id) ON DELETE CASCADE,
  name TEXT,
  code TEXT,
  area_type_id UUID REFERENCES type_lists(id) ON DELETE SET NULL,
  capacity NUMERIC,
  description TEXT,
  responsible_id UUID REFERENCES medical_staff(id) ON DELETE SET NULL,
  location TEXT,
  start_hour TIME,
  finish_hour TIME,
  status_id UUID REFERENCES type_lists(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ,
  CHECK (start_hour IS NULL OR finish_hour IS NULL OR start_hour <> finish_hour)
);

CREATE TABLE IF NOT EXISTS area_collaborators (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  area_id UUID NOT NULL REFERENCES areas(id) ON DELETE CASCADE,
  medical_staff_id UUID NOT NULL REFERENCES medical_staff(id) ON DELETE CASCADE,
  UNIQUE (area_id, medical_staff_id)
);

CREATE TABLE IF NOT EXISTS campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_delivery_institution_id UUID REFERENCES service_delivery_institutions(id) ON DELETE SET NULL,
  name TEXT,
  campaign_type_id UUID REFERENCES type_lists(id) ON DELETE SET NULL,
  start_date TIMESTAMPTZ,
  finish_date TIMESTAMPTZ,
  usage_external_form BOOLEAN NOT NULL DEFAULT FALSE,
  url_external_form TEXT,
  resources JSONB NOT NULL DEFAULT '[]'::jsonb,
  personal JSONB NOT NULL DEFAULT '[]'::jsonb,
  campaign_status_id UUID REFERENCES type_lists(id) ON DELETE SET NULL,
  status BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CHECK (start_date IS NULL OR finish_date IS NULL OR start_date <= finish_date)
);

CREATE TABLE IF NOT EXISTS campaign_movements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES campaigns(id) ON DELETE SET NULL,
  resource JSONB NOT NULL DEFAULT '{}'::jsonb,
  personal JSONB NOT NULL DEFAULT '{}'::jsonb,
  obs TEXT,
  movement_status_id UUID REFERENCES type_lists(id) ON DELETE SET NULL,
  status BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- =========================================================
-- 8. ÍNDICES
-- =========================================================

CREATE INDEX IF NOT EXISTS idx_patients_document_name
  ON patients (code, first_name, paternal_surname, maternal_surname);
CREATE INDEX IF NOT EXISTS idx_medical_histories_patient
  ON medical_histories (patient_id);
CREATE INDEX IF NOT EXISTS idx_growth_stage_vaccines_stage
  ON growth_stage_vaccines (growth_stage_id);
CREATE INDEX IF NOT EXISTS idx_doses_growth_stage
  ON doses (growth_stage_id);
CREATE INDEX IF NOT EXISTS idx_patient_measurements_stage
  ON patient_measurements (growth_stage_id);
CREATE INDEX IF NOT EXISTS idx_products_category
  ON products (category_id);
CREATE INDEX IF NOT EXISTS idx_kardex_product_created
  ON kardex (product_id, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_kardex_master_product
  ON kardex_masters (product_id);
CREATE INDEX IF NOT EXISTS idx_areas_institution
  ON areas (service_delivery_institution_id);
CREATE INDEX IF NOT EXISTS idx_campaigns_institution_dates
  ON campaigns (service_delivery_institution_id, start_date, finish_date);
CREATE INDEX IF NOT EXISTS idx_staff_establishment_staff
  ON medical_staff_establishments (medical_staff_id);
CREATE INDEX IF NOT EXISTS idx_staff_profiles_staff
  ON medical_staff_profiles (medical_staff_id);

-- Para búsquedas de texto en Supabase se pueden añadir índices GIN
-- con to_tsvector según idioma y campos que realmente se consulten.
-- Las reglas de RLS deben definirse según los perfiles, establecimientos
-- y permisos funcionales de la aplicación antes de exponer las tablas por API.
