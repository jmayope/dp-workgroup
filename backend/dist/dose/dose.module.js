"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoseModule = void 0;
const common_1 = require("@nestjs/common");
const dose_service_1 = require("./dose.service");
const dose_controller_1 = require("./dose.controller");
const database_module_1 = require("../database/database.module");
const dose_provider_1 = require("./providers/dose.provider");
let DoseModule = class DoseModule {
};
exports.DoseModule = DoseModule;
exports.DoseModule = DoseModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [dose_controller_1.DoseController],
        providers: [dose_service_1.DoseService, ...dose_provider_1.DoseProvider],
    })
], DoseModule);
//# sourceMappingURL=dose.module.js.map