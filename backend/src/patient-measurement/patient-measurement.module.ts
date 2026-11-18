import { Module } from '@nestjs/common';
import { PatientMeasurementService } from './patient-measurement.service';
import { PatientMeasurementController } from './patient-measurement.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PatientMeasurementProvider } from './providers/patient-measurement.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PatientMeasurementController],
  providers: [PatientMeasurementService, ...PatientMeasurementProvider],
})
export class PatientMeasurementModule {}
