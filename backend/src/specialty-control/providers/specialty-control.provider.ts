import { Connection } from 'mongoose';
import { SpecialtyControl } from '../schemas/specialty-control.schema';

export const SpecialtyControlProvider = [
    {
        provide: 'SPECIALTY_CONTROL_MODEL',
        useFactory: (connection: Connection) => connection.model('specialtyControls', SpecialtyControl),
        inject: ['DATABASE_CONNECTION']
    }
]