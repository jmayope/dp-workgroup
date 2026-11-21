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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadFileInterceptor = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const config_1 = require("@nestjs/config");
const multer_1 = require("multer");
const fs = require("fs");
const path = require("path");
let UploadFileInterceptor = class UploadFileInterceptor {
    constructor(configService) {
        this.configService = configService;
    }
    async intercept(context, next) {
        const uploadPath = this.configService.get('URI_FILES');
        if (!uploadPath) {
            throw new Error('URI_FILES no está configurado');
        }
        fs.mkdirSync(uploadPath, { recursive: true });
        const interceptor = (0, platform_express_1.FileInterceptor)('file', {
            storage: (0, multer_1.diskStorage)({
                destination: uploadPath,
                filename: (req, file, cb) => {
                    const extension = path.extname(file.originalname);
                    cb(null, `${Date.now()}${extension}`);
                }
            })
        });
        const instance = new interceptor();
        return instance.intercept(context, next);
    }
};
exports.UploadFileInterceptor = UploadFileInterceptor;
exports.UploadFileInterceptor = UploadFileInterceptor = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UploadFileInterceptor);
//# sourceMappingURL=upload-file.interceptor.js.map