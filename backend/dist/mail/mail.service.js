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
var MailService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
let MailService = MailService_1 = class MailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
        this.logger = new common_1.Logger(MailService_1.name);
    }
    async sendMail(to, subject, html) {
        try {
            await this.mailerService.sendMail({
                to,
                subject,
                html,
            });
            this.logger.log(`Email enviado correctamente: ${to}`);
            return true;
        }
        catch (error) {
            this.logger.error(`Error enviando email a ${to}`, error.stack);
            throw error;
        }
    }
    async sendTemplate(to, subject, template, context) {
        try {
            context.uri_app = "http://localhost:4200";
            context.username = context.username || to;
            await this.mailerService.sendMail({
                to,
                subject,
                template,
                context,
            });
            return true;
        }
        catch (error) {
            this.logger.error(`Error enviando plantilla a ${to}`, error.stack);
            throw error;
        }
    }
};
exports.MailService = MailService;
exports.MailService = MailService = MailService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailService);
//# sourceMappingURL=mail.service.js.map