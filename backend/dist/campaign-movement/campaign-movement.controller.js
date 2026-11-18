"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignMovementController = void 0;
const common_1 = require("@nestjs/common");
const campaign_movement_service_1 = require("./campaign-movement.service");
let CampaignMovementController = class CampaignMovementController {
    constructor(campaignMovementService) {
        this.campaignMovementService = campaignMovementService;
    }
    create(body) {
        return this.campaignMovementService.create(body);
    }
    findAll(body) {
        return this.campaignMovementService.findAll(body.where);
    }
    findOne(id) {
        return this.campaignMovementService.findOne(id);
    }
    update(id, body) {
        return this.campaignMovementService.update(+id, body.updated);
    }
    remove(id) {
        return this.campaignMovementService.remove(id);
    }
};
exports.CampaignMovementController = CampaignMovementController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CampaignMovementController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('where'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CampaignMovementController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CampaignMovementController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CampaignMovementController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CampaignMovementController.prototype, "remove", null);
exports.CampaignMovementController = CampaignMovementController = __decorate([
    (0, common_1.Controller)('campaign-movement'),
    __metadata("design:paramtypes", [campaign_movement_service_1.CampaignMovementService])
], CampaignMovementController);
//# sourceMappingURL=campaign-movement.controller.js.map