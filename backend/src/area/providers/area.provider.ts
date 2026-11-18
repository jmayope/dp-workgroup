import { Connection } from 'mongoose';
import { Area } from '../schemas/area.schema';

export const AreaProvider = [
    {
        provide: 'AREA_MODEL',
        useFactory: (connection: Connection) => connection.model('areas', Area),
        inject: ['DATABASE_CONNECTION']
    }
]