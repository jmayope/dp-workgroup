import { Module } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaController } from './area.controller';
import { DatabaseModule } from 'src/database/database.module';
import { AreaProvider } from './providers/area.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [AreaController],
  providers: [AreaService, ...AreaProvider],
})
export class AreaModule {}
