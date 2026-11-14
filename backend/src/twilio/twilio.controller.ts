import { Body, Controller, Post } from '@nestjs/common';
import { TwilioService } from './twilio.service';

@Controller('twilio')
export class TwilioController {
  constructor(private readonly twilioService: TwilioService) {}

  @Post('send-sms')
  async sendSMS(
    @Body() body: { to: string; message: string },
  ) {
    return this.twilioService.sendSMS(
      body.to,
      body.message,
    );
  }
}
