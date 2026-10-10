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
exports.SpecialtyControlController = void 0;
const common_1 = require("@nestjs/common");
const specialty_control_service_1 = require("./specialty-control.service");
let SpecialtyControlController = class SpecialtyControlController {
    constructor(specialtyControlService) {
        this.specialtyControlService = specialtyControlService;
    }
    create(body) {
        return this.specialtyControlService.create(body);
    }
    findAll(body) {
        return this.specialtyControlService.findAll(body.where);
    }
    findOne(id) {
        return this.specialtyControlService.findOne(id);
    }
    update(id, body) {
        return this.specialtyControlService.update(+id, body.updated);
    }
    remove(id) {
        return this.specialtyControlService.remove(id);
    }
};
exports.SpecialtyControlController = SpecialtyControlController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SpecialtyControlController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('where'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SpecialtyControlController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SpecialtyControlController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SpecialtyControlController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SpecialtyControlController.prototype, "remove", null);
exports.SpecialtyControlController = SpecialtyControlController = __decorate([
    (0, common_1.Controller)('specialty-control'),
    __metadata("design:paramtypes", [specialty_control_service_1.SpecialtyControlService])
], SpecialtyControlController);
//# sourceMappingURL=specialty-control.controller.js.map