import { Connection } from 'mongoose';
import { Vaccine } from '../schemas/vaccine.schema';

export const VaccineProvider = [
    {
        provide: 'VACCINE_MODEL',
        useFactory: (connection: Connection) => connection.model('vaccines', Vaccine),
        inject: ['DATABASE_CONNECTION']
    }
]