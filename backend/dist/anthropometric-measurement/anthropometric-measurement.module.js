"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnthropometricMeasurementModule = void 0;
const common_1 = require("@nestjs/common");
const anthropometric_measurement_service_1 = require("./anthropometric-measurement.service");
const anthropometric_measurement_controller_1 = require("./anthropometric-measurement.controller");
const database_module_1 = require("../database/database.module");
const anthropometric_measurement_provider_1 = require("./providers/anthropometric-measurement.provider");
let AnthropometricMeasurementModule = class AnthropometricMeasurementModule {
};
exports.AnthropometricMeasurementModule = AnthropometricMeasurementModule;
exports.AnthropometricMeasurementModule = AnthropometricMeasurementModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [anthropometric_measurement_controller_1.AnthropometricMeasurementController],
        providers: [anthropometric_measurement_service_1.AnthropometricMeasurementService, ...anthropometric_measurement_provider_1.AnthropometricMeasurementProvider],
    })
], AnthropometricMeasurementModule);
//# sourceMappingURL=anthropometric-measurement.module.js.map