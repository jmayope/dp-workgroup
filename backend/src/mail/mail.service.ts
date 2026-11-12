import { MailerService } from '@nestjs-modules/mailer';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);

  constructor(
    private readonly mailerService: MailerService
  ) {
    
  }

  async sendMail(
    to: string,
    subject: string,
    html: string,
  ): Promise<boolean> {
    try {
      await this.mailerService.sendMail({
        to,
        subject,
        html,
      });

      this.logger.log(`Email enviado correctamente: ${to}`);

      return true;
    } catch (error: any) {
      this.logger.error(
        `Error enviando email a ${to}`,
        error.stack,
      );

      throw error;
    }
  }

  async sendTemplate(
    to: string,
    subject: string,
    template: string,
    context: Record<string, any>,
  ): Promise<boolean> {
    try {
      await this.mailerService.sendMail({
        to,
        subject,
        template,
        context,
      });

      return true;
    } catch (error: any) {
      this.logger.error(
        `Error enviando plantilla a ${to}`,
        error.stack,
      );

      throw error;
    }
  }
}
