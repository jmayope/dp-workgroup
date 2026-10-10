import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import { PatientController } from './patient.controller';
import { DatabaseModule } from 'src/database/database.module';
import { PatientProvider } from './providers/patient.provider';
import { MedicalHistoryProvider } from 'src/medical-history/providers/medical-history.provider';
import { MedicalStaffProvider } from 'src/medical-staff/providers/medical-staff.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PatientController],
  providers: [PatientService, ...PatientProvider, ...MedicalHistoryProvider, ...MedicalStaffProvider],
})
export class PatientModule {}
