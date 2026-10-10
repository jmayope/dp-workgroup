"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialtyControlModule = void 0;
const common_1 = require("@nestjs/common");
const specialty_control_service_1 = require("./specialty-control.service");
const specialty_control_controller_1 = require("./specialty-control.controller");
const database_module_1 = require("../database/database.module");
const specialty_control_provider_1 = require("./providers/specialty-control.provider");
let SpecialtyControlModule = class SpecialtyControlModule {
};
exports.SpecialtyControlModule = SpecialtyControlModule;
exports.SpecialtyControlModule = SpecialtyControlModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [specialty_control_controller_1.SpecialtyControlController],
        providers: [specialty_control_service_1.SpecialtyControlService, ...specialty_control_provider_1.SpecialtyControlProvider],
    })
], SpecialtyControlModule);
//# sourceMappingURL=specialty-control.module.js.map