"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthNetworkModule = void 0;
const common_1 = require("@nestjs/common");
const health_network_service_1 = require("./health-network.service");
const health_network_controller_1 = require("./health-network.controller");
const database_module_1 = require("../database/database.module");
const health_network_provider_1 = require("./providers/health-network.provider");
let HealthNetworkModule = class HealthNetworkModule {
};
exports.HealthNetworkModule = HealthNetworkModule;
exports.HealthNetworkModule = HealthNetworkModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [health_network_controller_1.HealthNetworkController],
        providers: [health_network_service_1.HealthNetworkService, ...health_network_provider_1.HealthNetworkProvider],
    })
], HealthNetworkModule);
//# sourceMappingURL=health-network.module.js.map