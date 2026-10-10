import { Module } from '@nestjs/common';
import { SpecialtyControlService } from './specialty-control.service';
import { SpecialtyControlController } from './specialty-control.controller';
import { DatabaseModule } from 'src/database/database.module';
import { SpecialtyControlProvider } from './providers/specialty-control.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [SpecialtyControlController],
  providers: [SpecialtyControlService, ...SpecialtyControlProvider],
})
export class SpecialtyControlModule {}
