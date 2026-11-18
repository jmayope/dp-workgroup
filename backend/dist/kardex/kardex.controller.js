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
exports.KardexController = void 0;
const common_1 = require("@nestjs/common");
const kardex_service_1 = require("./kardex.service");
let KardexController = class KardexController {
    constructor(kardexService) {
        this.kardexService = kardexService;
    }
    create(body) {
        return this.kardexService.create(body);
    }
    findAll(body, query) {
        return this.kardexService.findAll(body.where, query);
    }
    findLastRecords(body) {
        return this.kardexService.findLastRecords(body.pagination);
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
        return this.kardexService.getQuantity(body.where);
    }
    findOne(id) {
        return this.kardexService.findOne(id);
    }
    update(id, body) {
        return this.kardexService.update(id, body.updated);
    }
    remove(id) {
        return this.kardexService.remove(id);
    }
};
exports.KardexController = KardexController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KardexController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('where'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], KardexController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('last-records'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KardexController.prototype, "findLastRecords", null);
__decorate([
    (0, common_1.Post)('quantity'),
    __param(0, (0, common_1.Headers)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], KardexController.prototype, "getQuantity", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KardexController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], KardexController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], KardexController.prototype, "remove", null);
exports.KardexController = KardexController = __decorate([
    (0, common_1.Controller)('kardex'),
    __metadata("design:paramtypes", [kardex_service_1.KardexService])
], KardexController);
//# sourceMappingURL=kardex.controller.js.map