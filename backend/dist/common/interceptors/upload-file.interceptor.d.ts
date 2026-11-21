import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
export declare class UploadFileInterceptor implements NestInterceptor {
    private readonly configService;
    constructor(configService: ConfigService);
    intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>>;
}
