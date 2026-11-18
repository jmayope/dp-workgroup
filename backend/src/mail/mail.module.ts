import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
// import { } from '@nestjs/config';
import { MailController } from './mail.controller';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/adapters/handlebars.adapter.js';

@Module({
  controllers: [MailController],
  imports: [MailerModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: (configService: ConfigService) => ({
      transport: {
        host: configService.get<string>('MAIL_HOST'),
        port: configService.get<number>('MAIL_PORT'),
        secure: configService.get<boolean>('MAIL_SECURE'),
        auth: {
          user: configService.get<string>('MAIL_USER'),
          pass: configService.get<string>('MAIL_PASS'),
        },
      },
      defaults: {
        from: configService.get<string>('MAIL_FROM'),
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  }),
  ],
  providers: [MailService],
})
export class MailModule { }
