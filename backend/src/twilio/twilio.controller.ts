import { Body, Controller, Post } from '@nestjs/common';
import { TwilioService } from './twilio.service';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('twilio')
export class TwilioController {
  constructor(private readonly twilioService: TwilioService) {}

  @Post('send-sms')
  @Public()
  async sendSMS(
    @Body() body: { to: string; message: string },
  ) {
    return this.twilioService.sendSMS(
      body.to,
      body.message,
    );
  }
}
