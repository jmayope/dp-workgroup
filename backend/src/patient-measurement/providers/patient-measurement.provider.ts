import { Connection } from 'mongoose';
import { PatientMeasurement } from '../schemas/patient-measurement.schema';

export const PatientMeasurementProvider = [
    {
        provide: 'PATIENT_MEASUREMENT_MODEL',
        useFactory: (connection: Connection) => connection.model('patientmeasurements', PatientMeasurement),
        inject: ['DATABASE_CONNECTION']
    }
]