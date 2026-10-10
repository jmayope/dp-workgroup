import { Connection } from 'mongoose';
import { MedicalHistory } from '../schemas/medical-history.schema';

export const MedicalHistoryProvider = [
    {
        provide: 'MEDICAL_HISTORY_MODEL',
        useFactory: (connection: Connection) => connection.model('medicalHistories', MedicalHistory),
        inject: ['DATABASE_CONNECTION']
    }
]