import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { MailService } from './mail.service';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('mail')
export class MailController {
  constructor(
    private readonly mailService: MailService,
  ) {}

  @Post('send')
  @HttpCode(HttpStatus.OK)
  @Public()
  async sendMail(@Body() body: any) {
    const result = await this.mailService.sendMail(
      body.to,
      body.subject,
      body.html,
    );

    return {
      success: result,
      message: 'Correo enviado correctamente',
    };
  }

  @Post('send-template')
  @HttpCode(HttpStatus.OK)
  @Public()
  async sendTemplate(@Body() body: any) {
    const result = await this.mailService.sendTemplate(
      body.to,
      body.subject,
      body.template,
      body.context || {},
    );

    return {
      success: result,
      message: 'Plantilla enviada correctamente',
    };
  }
}
