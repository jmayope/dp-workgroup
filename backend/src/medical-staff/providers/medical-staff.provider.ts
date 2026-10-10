import { Connection } from 'mongoose';
import { MedicalStaff } from '../schemas/medical-staff.schema';

export const MedicalStaffProvider = [
    {
        provide: 'MEDICAL_STAFF_MODEL',
        useFactory: (connection: Connection) => connection.model('medicalStaffs', MedicalStaff),
        inject: ['DATABASE_CONNECTION']
    }
]