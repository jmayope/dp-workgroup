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
exports.KardexMasterController = void 0;
const common_1 = require("@nestjs/common");
const kardex_master_service_1 = require("./kardex-master.service");
let KardexMasterController = class KardexMasterController {
    constructor(kardexMasterService) {
        this.kardexMasterService = kardexMasterService;
    }
    create(body) {
        return this.kardexMasterService.create(body);
    }
    findAll(body, query) {
        return this.kardexMasterService.findAll(body.where, query);
    }
    getQuantity(headers, body) {
        if (headers['app-type']) {
            body.where = {
                $or: [
                    {
                        "product.code": { $regex: body.text, $options: 'i' }
                    },
                    {
                        "product.name": { $regex: body.text, $options: 'i' }
                    },
                    {
                        "reason": { $regex: body.text, $options: 'i' }
                    }
                ]
            };
        }
        return this.kardexMasterService.getQuantity(body.where);
    }
    findOne(id) {
        return this.kardexMasterService.findOne(id);
    }
    update(id, body) {
        return this.kardexMasterService.update(+id, body.updated);
    }
    remove(id) {
        return this.kardexMasterService.remove(id);
    }
};
exports.KardexMasterController = KardexMasterController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KardexMasterController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('where'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], KardexMasterController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('quantity'),
    __param(0, (0, common_1.Headers)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], KardexMasterController.prototype, "getQuantity", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KardexMasterController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], KardexMasterController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KardexMasterController.prototype, "remove", null);
exports.KardexMasterController = KardexMasterController = __decorate([
    (0, common_1.Controller)('kardex-master'),
    __metadata("design:paramtypes", [kardex_master_service_1.KardexMasterService])
], KardexMasterController);
//# sourceMappingURL=kardex-master.controller.js.map