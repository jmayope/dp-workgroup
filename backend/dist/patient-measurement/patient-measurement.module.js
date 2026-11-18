"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientMeasurementModule = void 0;
const common_1 = require("@nestjs/common");
const patient_measurement_service_1 = require("./patient-measurement.service");
const patient_measurement_controller_1 = require("./patient-measurement.controller");
const database_module_1 = require("../database/database.module");
const patient_measurement_provider_1 = require("./providers/patient-measurement.provider");
let PatientMeasurementModule = class PatientMeasurementModule {
};
exports.PatientMeasurementModule = PatientMeasurementModule;
exports.PatientMeasurementModule = PatientMeasurementModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [patient_measurement_controller_1.PatientMeasurementController],
        providers: [patient_measurement_service_1.PatientMeasurementService, ...patient_measurement_provider_1.PatientMeasurementProvider],
    })
], PatientMeasurementModule);
//# sourceMappingURL=patient-measurement.module.js.map