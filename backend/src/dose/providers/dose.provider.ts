import { Connection } from 'mongoose';
import { Dose } from '../schemas/dose.schema';

export const DoseProvider = [
    {
        provide: 'DOSE_MODEL',
        useFactory: (connection: Connection) => connection.model('doses', Dose),
        inject: ['DATABASE_CONNECTION']
    }
]