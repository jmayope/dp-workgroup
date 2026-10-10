import { Test, TestingModule } from '@nestjs/testing';
import { CampaignMovementController } from './campaign-movement.controller';
import { CampaignMovementService } from './campaign-movement.service';

describe('CampaignMovementController', () => {
  let controller: CampaignMovementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampaignMovementController],
      providers: [CampaignMovementService],
    }).compile();

    controller = module.get<CampaignMovementController>(CampaignMovementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
