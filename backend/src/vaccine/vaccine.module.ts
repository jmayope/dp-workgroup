import { Module } from '@nestjs/common';
import { VaccineService } from './vaccine.service';
import { VaccineController } from './vaccine.controller';
import { DatabaseModule } from 'src/database/database.module';
import { VaccineProvider } from './providers/vaccine.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [VaccineController],
  providers: [VaccineService, ...VaccineProvider],
})
export class VaccineModule {}
