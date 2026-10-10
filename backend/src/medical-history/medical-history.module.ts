import { Module } from '@nestjs/common';
import { MedicalHistoryService } from './medical-history.service';
import { MedicalHistoryController } from './medical-history.controller';
import { DatabaseModule } from 'src/database/database.module';
import { MedicalHistoryProvider } from './providers/medical-history.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [MedicalHistoryController],
  providers: [MedicalHistoryService, ...MedicalHistoryProvider],
})
export class MedicalHistoryModule {}
