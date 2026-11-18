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
exports.MedicalHistoryController = void 0;
const common_1 = require("@nestjs/common");
const medical_history_service_1 = require("./medical-history.service");
let MedicalHistoryController = class MedicalHistoryController {
    constructor(medicalHistoryService) {
        this.medicalHistoryService = medicalHistoryService;
    }
    create(body) {
        return this.medicalHistoryService.create(body);
    }
    findAll(body) {
        return this.medicalHistoryService.findAll(body.where);
    }
    findOne(id) {
        return this.medicalHistoryService.findOne(id);
    }
    update(id, body) {
        return this.medicalHistoryService.update(+id, body.updated);
    }
    remove(id) {
        return this.medicalHistoryService.remove(id);
    }
};
exports.MedicalHistoryController = MedicalHistoryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MedicalHistoryController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('where'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MedicalHistoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MedicalHistoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], MedicalHistoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MedicalHistoryController.prototype, "remove", null);
exports.MedicalHistoryController = MedicalHistoryController = __decorate([
    (0, common_1.Controller)('medical-history'),
    __metadata("design:paramtypes", [medical_history_service_1.MedicalHistoryService])
], MedicalHistoryController);
//# sourceMappingURL=medical-history.controller.js.map