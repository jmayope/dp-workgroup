import { Module } from '@nestjs/common';
import { GrowthStageService } from './growth-stage.service';
import { GrowthStageController } from './growth-stage.controller';
import { DatabaseModule } from 'src/database/database.module';
import { GrowthStageProvider } from './providers/growth-stage.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [GrowthStageController],
  providers: [GrowthStageService, ...GrowthStageProvider],
})
export class GrowthStageModule {}
