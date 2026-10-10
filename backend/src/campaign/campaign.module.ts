import { Module } from '@nestjs/common';
import { CampaignService } from './campaign.service';
import { CampaignController } from './campaign.controller';
import { DatabaseModule } from 'src/database/database.module';
import { CampaignProvider } from './providers/campaign.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [CampaignController],
  providers: [CampaignService, ...CampaignProvider],
})
export class CampaignModule {}
