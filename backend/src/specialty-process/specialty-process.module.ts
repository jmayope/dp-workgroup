import { Module } from '@nestjs/common';
import { SpecialtyProcessService } from './specialty-process.service';
import { SpecialtyProcessController } from './specialty-process.controller';
import { DatabaseModule } from 'src/database/database.module';
import { SpecialtyProcessProvider } from './providers/specialty-process.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [SpecialtyProcessController],
  providers: [SpecialtyProcessService, ...SpecialtyProcessProvider],
})
export class SpecialtyProcessModule {}
