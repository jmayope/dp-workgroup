import { MailerService } from '@nestjs-modules/mailer';
export declare class MailService {
    private readonly mailerService;
    private readonly logger;
    constructor(mailerService: MailerService);
    sendMail(to: string, subject: string, html: string): Promise<boolean>;
    sendTemplate(to: string, subject: string, template: string, context: Record<string, any>): Promise<boolean>;
}
