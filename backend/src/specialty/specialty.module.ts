import { Module } from '@nestjs/common';
import { SpecialtyService } from './specialty.service';
import { SpecialtyController } from './specialty.controller';
import { DatabaseModule } from 'src/database/database.module';
import { SpecialtyProvider } from './providers/specialty.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [SpecialtyController],
  providers: [SpecialtyService, ...SpecialtyProvider],
})
export class SpecialtyModule {}
