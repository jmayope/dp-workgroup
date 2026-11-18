import { Connection } from 'mongoose';
import { SpecialtyProcess } from '../schemas/specialty-process.schema';

export const SpecialtyProcessProvider = [
    {
        provide: 'SPECIALTY_PROCESS_MODEL',
        useFactory: (connection: Connection) => connection.model('specialtyProcesses', SpecialtyProcess),
        inject: ['DATABASE_CONNECTION']
    }
]