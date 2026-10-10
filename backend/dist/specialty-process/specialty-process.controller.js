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
exports.SpecialtyProcessController = void 0;
const common_1 = require("@nestjs/common");
const specialty_process_service_1 = require("./specialty-process.service");
let SpecialtyProcessController = class SpecialtyProcessController {
    constructor(specialtyProcessService) {
        this.specialtyProcessService = specialtyProcessService;
    }
    create(body) {
        return this.specialtyProcessService.create(body);
    }
    findAll(body) {
        return this.specialtyProcessService.findAll(body.where);
    }
    findOne(id) {
        return this.specialtyProcessService.findOne(id);
    }
    update(id, body) {
        return this.specialtyProcessService.update(+id, body.updated);
    }
    remove(id) {
        return this.specialtyProcessService.remove(id);
    }
};
exports.SpecialtyProcessController = SpecialtyProcessController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SpecialtyProcessController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('where'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SpecialtyProcessController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SpecialtyProcessController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], SpecialtyProcessController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], SpecialtyProcessController.prototype, "remove", null);
exports.SpecialtyProcessController = SpecialtyProcessController = __decorate([
    (0, common_1.Controller)('specialty-process'),
    __metadata("design:paramtypes", [specialty_process_service_1.SpecialtyProcessService])
], SpecialtyProcessController);
//# sourceMappingURL=specialty-process.controller.js.map