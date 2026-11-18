import { Module } from '@nestjs/common';
import { CampaignMovementService } from './campaign-movement.service';
import { CampaignMovementController } from './campaign-movement.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CampaignMovementProvider } from './providers/campaign-movement.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [CampaignMovementController],
  providers: [CampaignMovementService, ...CampaignMovementProvider],
})
export class CampaignMovementModule {}
