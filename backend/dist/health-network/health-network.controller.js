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
exports.HealthNetworkController = void 0;
const common_1 = require("@nestjs/common");
const health_network_service_1 = require("./health-network.service");
let HealthNetworkController = class HealthNetworkController {
    constructor(healthNetworkService) {
        this.healthNetworkService = healthNetworkService;
    }
    create(body) {
        return this.healthNetworkService.create(body);
    }
    findAll(body) {
        return this.healthNetworkService.findAll(body.where);
    }
    findOne(id) {
        return this.healthNetworkService.findOne(id);
    }
    update(id, body) {
        return this.healthNetworkService.update(id, body.updated);
    }
    remove(id) {
        return this.healthNetworkService.remove(id);
    }
};
exports.HealthNetworkController = HealthNetworkController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HealthNetworkController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('where'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HealthNetworkController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HealthNetworkController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], HealthNetworkController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HealthNetworkController.prototype, "remove", null);
exports.HealthNetworkController = HealthNetworkController = __decorate([
    (0, common_1.Controller)('health-network'),
    __metadata("design:paramtypes", [health_network_service_1.HealthNetworkService])
], HealthNetworkController);
//# sourceMappingURL=health-network.controller.js.map