"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignMovementModule = void 0;
const common_1 = require("@nestjs/common");
const campaign_movement_service_1 = require("./campaign-movement.service");
const campaign_movement_controller_1 = require("./campaign-movement.controller");
const database_module_1 = require("../database/database.module");
const campaign_movement_provider_1 = require("./providers/campaign-movement.provider");
let CampaignMovementModule = class CampaignMovementModule {
};
exports.CampaignMovementModule = CampaignMovementModule;
exports.CampaignMovementModule = CampaignMovementModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [campaign_movement_controller_1.CampaignMovementController],
        providers: [campaign_movement_service_1.CampaignMovementService, ...campaign_movement_provider_1.CampaignMovementProvider],
    })
], CampaignMovementModule);
//# sourceMappingURL=campaign-movement.module.js.map