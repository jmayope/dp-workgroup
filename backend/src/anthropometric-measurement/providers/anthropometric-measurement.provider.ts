import { Connection } from 'mongoose';
import { AnthropometricMeasurement } from '../schemas/anthropometric-measurement.schema';

export const AnthropometricMeasurementProvider = [
    {
        provide: 'ANTHROPOMETRIC_MEASUREMENT_MODEL',
        useFactory: (connection: Connection) => connection.model('anthropometricmeasurements', AnthropometricMeasurement),
        inject: ['DATABASE_CONNECTION']
    }
]