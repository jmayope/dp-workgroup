"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalStaffModule = void 0;
const common_1 = require("@nestjs/common");
const medical_staff_service_1 = require("./medical-staff.service");
const medical_staff_controller_1 = require("./medical-staff.controller");
const database_module_1 = require("../database/database.module");
const medical_staff_provider_1 = require("./providers/medical-staff.provider");
let MedicalStaffModule = class MedicalStaffModule {
};
exports.MedicalStaffModule = MedicalStaffModule;
exports.MedicalStaffModule = MedicalStaffModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [medical_staff_controller_1.MedicalStaffController],
        providers: [medical_staff_service_1.MedicalStaffService, ...medical_staff_provider_1.MedicalStaffProvider],
    })
], MedicalStaffModule);
//# sourceMappingURL=medical-staff.module.js.map