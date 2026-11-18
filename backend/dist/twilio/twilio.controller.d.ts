import { TwilioService } from './twilio.service';
export declare class TwilioController {
    private readonly twilioService;
    constructor(twilioService: TwilioService);
    sendSMS(body: {
        to: string;
        message: string;
    }): Promise<{
        sid: string;
        status: import("twilio/lib/rest/api/v2010/account/message").MessageStatus;
    }>;
}
