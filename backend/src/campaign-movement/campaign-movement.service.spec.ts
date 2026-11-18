import { Test, TestingModule } from '@nestjs/testing';
import { CampaignMovementService } from './campaign-movement.service';

describe('CampaignMovementService', () => {
  let service: CampaignMovementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CampaignMovementService],
    }).compile();

    service = module.get<CampaignMovementService>(CampaignMovementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
