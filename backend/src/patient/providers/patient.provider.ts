import { Connection } from 'mongoose';
import { Patient } from '../schemas/patient.schema';

export const PatientProvider = [
    {
        provide: 'PATIENT_MODEL',
        useFactory: (connection: Connection) => connection.model('patients', Patient),
        inject: ['DATABASE_CONNECTION']
    }
]