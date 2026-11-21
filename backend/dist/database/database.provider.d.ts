import { ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';
export declare const DatabaseProvider: {
    provide: string;
    useFactory: (configService: ConfigService) => Promise<typeof mongoose>;
    inject: (typeof ConfigService)[];
}[];
