import { Module } from '@nestjs/common';
import { MedicalStaffService } from './medical-staff.service';
import { MedicalStaffController } from './medical-staff.controller';
import { DatabaseModule } from 'src/database/database.module';
import { MedicalStaffProvider } from './providers/medical-staff.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [MedicalStaffController],
  providers: [MedicalStaffService, ...MedicalStaffProvider],
})
export class MedicalStaffModule {}
