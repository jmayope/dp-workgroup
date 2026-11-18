import { MailService } from './mail.service';
export declare class MailController {
    private readonly mailService;
    constructor(mailService: MailService);
    sendMail(body: any): Promise<{
        success: boolean;
        message: string;
    }>;
    sendTemplate(body: any): Promise<{
        success: boolean;
        message: string;
    }>;
}
