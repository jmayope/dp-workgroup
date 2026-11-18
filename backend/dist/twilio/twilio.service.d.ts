import { ConfigService } from '@nestjs/config';
export declare class TwilioService {
    private configService;
    private client;
    constructor(configService: ConfigService);
    sendSMS(to: string, body: string): Promise<{
        sid: string;
        status: import("twilio/lib/rest/api/v2010/account/message").MessageStatus;
    }>;
}
