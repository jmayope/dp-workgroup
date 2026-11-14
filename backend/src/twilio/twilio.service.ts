import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import twilio = require('twilio');

@Injectable()
export class TwilioService {
  private client: ReturnType<typeof twilio>;

  constructor(private configService: ConfigService) {
    const accountSid = this.configService.get<string>(
      'TWILIO_ACCOUNT_SID',
    );

    const authToken = this.configService.get<string>(
      'TWILIO_AUTH_TOKEN',
    );

    this.client = twilio(accountSid, authToken);
  }

  async sendSMS(to: string, body: string) {
    const from = this.configService.get<string>(
      'TWILIO_PHONE_NUMBER',
    );

    const message = await this.client.messages.create({
      to,
      from,
      body,
    });

    return {
      sid: message.sid,
      status: message.status,
    };
  }
}
