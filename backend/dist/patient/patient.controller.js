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
exports.PatientController = void 0;
const common_1 = require("@nestjs/common");
const patient_service_1 = require("./patient.service");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const constants_1 = require("../constants");
let PatientController = class PatientController {
    constructor(patientService) {
        this.patientService = patientService;
    }
    create(body) {
        return this.patientService.create(body);
    }
    findAll(headers, body) {
        if (headers['app-type']) {
            body.pagination = JSON.parse(body.pagination);
            body.where = {
                $or: [
                    {
                        code: { $regex: body.text, $options: 'i' }
                    },
                    {
                        paternalSurname: { $regex: body.text, $options: 'i' }
                    },
                    {
                        maternalSurname: { $regex: body.text, $options: 'i' }
                    },
                    {
                        firstName: { $regex: body.text, $options: 'i' }
                    }
                ]
            };
        }
        return this.patientService.findAll(body.where, body.pagination);
    }
    getQuantity(headers, body) {
        if (headers['app-type']) {
            body.where = {
                $or: [
                    {
                        code: { $regex: body.text, $options: 'i' }
                    },
                    {
                        paternalSurname: { $regex: body.text, $options: 'i' }
                    },
                    {
                        maternalSurname: { $regex: body.text, $options: 'i' }
                    },
                    {
                        firstName: { $regex: body.text, $options: 'i' }
                    }
                ]
            };
        }
        return this.patientService.getQuantity(body.where);
    }
    export(body) {
        return this.patientService.export(body.where);
    }
    migrate(file) {
        console.log(file);
        return this.patientService.migrate(file);
    }
    findOne(id) {
        return this.patientService.findOne(id);
    }
    update(id, body) {
        return this.patientService.update(id, body.updated);
    }
    remove(id) {
        return this.patientService.remove(id);
    }
};
exports.PatientController = PatientController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PatientController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('where'),
    __param(0, (0, common_1.Headers)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PatientController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('quantity'),
    __param(0, (0, common_1.Headers)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PatientController.prototype, "getQuantity", null);
__decorate([
    (0, common_1.Post)('export'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PatientController.prototype, "export", null);
__decorate([
    (0, common_1.Post)('migrate'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: constants_1.URI_FILES,
            filename: (req, file, cb) => {
                cb(null, `${Date.now()}.${file.originalname.substring(6).split('.')[1]}`);
            }
        })
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PatientController.prototype, "migrate", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PatientController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PatientController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PatientController.prototype, "remove", null);
exports.PatientController = PatientController = __decorate([
    (0, common_1.Controller)('patient'),
    __metadata("design:paramtypes", [patient_service_1.PatientService])
], PatientController);
//# sourceMappingURL=patient.controller.js.map