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
exports.AnthropometricMeasurementController = void 0;
const common_1 = require("@nestjs/common");
const anthropometric_measurement_service_1 = require("./anthropometric-measurement.service");
let AnthropometricMeasurementController = class AnthropometricMeasurementController {
    constructor(anthropometricMeasurementService) {
        this.anthropometricMeasurementService = anthropometricMeasurementService;
    }
    create(body) {
        return this.anthropometricMeasurementService.create(body);
    }
    findAll(body) {
        return this.anthropometricMeasurementService.findAll(body.where);
    }
    findOne(id) {
        return this.anthropometricMeasurementService.findOne(id);
    }
    update(id, body) {
        return this.anthropometricMeasurementService.update(id, body.updated);
    }
    remove(id) {
        return this.anthropometricMeasurementService.remove(id);
    }
};
exports.AnthropometricMeasurementController = AnthropometricMeasurementController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnthropometricMeasurementController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('where'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnthropometricMeasurementController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnthropometricMeasurementController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AnthropometricMeasurementController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AnthropometricMeasurementController.prototype, "remove", null);
exports.AnthropometricMeasurementController = AnthropometricMeasurementController = __decorate([
    (0, common_1.Controller)('anthropometric-measurement'),
    __metadata("design:paramtypes", [anthropometric_measurement_service_1.AnthropometricMeasurementService])
], AnthropometricMeasurementController);
//# sourceMappingURL=anthropometric-measurement.controller.js.map