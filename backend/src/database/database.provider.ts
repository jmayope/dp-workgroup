import { ConfigService } from '@nestjs/config';
import * as mongoose from 'mongoose';

export const DatabaseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (configService: ConfigService): Promise<typeof mongoose> => {
            const dbUrl = configService.get<string>('DB_URL');
            return mongoose.connect(dbUrl);
        },
        inject: [ConfigService]
    }
]