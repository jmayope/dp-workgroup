import { Connection } from 'mongoose';
import { Specialty } from '../schemas/specialty.schema';

export const SpecialtyProvider = [
    {
        provide: 'SPECIALTY_MODEL',
        useFactory: (connection: Connection) => connection.model('specialties', Specialty),
        inject: ['DATABASE_CONNECTION']
    }
]