"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const patient_module_1 = require("./patient/patient.module");
const medical_staff_module_1 = require("./medical-staff/medical-staff.module");
const medical_history_module_1 = require("./medical-history/medical-history.module");
const specialty_module_1 = require("./specialty/specialty.module");
const specialty_process_module_1 = require("./specialty-process/specialty-process.module");
const database_module_1 = require("./database/database.module");
const specialty_control_module_1 = require("./specialty-control/specialty-control.module");
const auth_module_1 = require("./auth/auth.module");
const menu_module_1 = require("./menu/menu.module");
const profile_menu_module_1 = require("./profile-menu/profile-menu.module");
const profile_module_1 = require("./profile/profile.module");
const growth_stage_module_1 = require("./growth-stage/growth-stage.module");
const service_delivery_institution_module_1 = require("./service-delivery-institution/service-delivery-institution.module");
const health_network_module_1 = require("./health-network/health-network.module");
const anthropometric_measurement_module_1 = require("./anthropometric-measurement/anthropometric-measurement.module");
const patient_measurement_module_1 = require("./patient-measurement/patient-measurement.module");
const vaccine_module_1 = require("./vaccine/vaccine.module");
const dose_module_1 = require("./dose/dose.module");
const kardex_module_1 = require("./kardex/kardex.module");
const type_list_module_1 = require("./type-list/type-list.module");
const product_module_1 = require("./product/product.module");
const kardex_master_module_1 = require("./kardex-master/kardex-master.module");
const area_module_1 = require("./area/area.module");
const moment_1 = require("moment");
const core_1 = require("@nestjs/core");
const auth_guard_1 = require("./auth/auth.guard");
const campaign_module_1 = require("./campaign/campaign.module");
const campaign_movement_module_1 = require("./campaign-movement/campaign-movement.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [patient_module_1.PatientModule, medical_staff_module_1.MedicalStaffModule, medical_history_module_1.MedicalHistoryModule, specialty_module_1.SpecialtyModule, specialty_process_module_1.SpecialtyProcessModule, database_module_1.DatabaseModule, specialty_control_module_1.SpecialtyControlModule, auth_module_1.AuthModule, menu_module_1.MenuModule, profile_menu_module_1.ProfileMenuModule, profile_module_1.ProfileModule, growth_stage_module_1.GrowthStageModule, service_delivery_institution_module_1.ServiceDeliveryInstitutionModule, health_network_module_1.HealthNetworkModule, anthropometric_measurement_module_1.AnthropometricMeasurementModule, patient_measurement_module_1.PatientMeasurementModule, vaccine_module_1.VaccineModule, dose_module_1.DoseModule, kardex_module_1.KardexModule, type_list_module_1.TypeListModule, product_module_1.ProductModule, kardex_master_module_1.KardexMasterModule, area_module_1.AreaModule, campaign_module_1.CampaignModule, campaign_movement_module_1.CampaignMovementModule],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            {
                provide: 'MomentWrapper',
                useValue: moment_1.default
            },
            {
                provide: core_1.APP_GUARD,
                useClass: auth_guard_1.AuthGuard,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map