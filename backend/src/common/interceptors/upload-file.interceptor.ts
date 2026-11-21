import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { ConfigService } from '@nestjs/config';
import { diskStorage } from 'multer';
import { Observable } from 'rxjs';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class UploadFileInterceptor implements NestInterceptor {

  constructor(private readonly configService: ConfigService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Promise<Observable<any>> {

    const uploadPath = this.configService.get<string>('URI_FILES');

    if (!uploadPath) {
      throw new Error('URI_FILES no está configurado');
    }

    fs.mkdirSync(uploadPath, { recursive: true });

    const interceptor = FileInterceptor('file', {
      storage: diskStorage({
        destination: uploadPath,
        filename: (req, file, cb) => {
          const extension = path.extname(file.originalname);
          cb(null, `${Date.now()}${extension}`);
        }
      })
    });

    const instance = new (interceptor as any)();

    return instance.intercept(context, next);
  }
}