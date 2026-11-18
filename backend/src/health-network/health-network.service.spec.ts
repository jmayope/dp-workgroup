import { Test, TestingModule } from '@nestjs/testing';
import { HealthNetworkService } from './health-network.service';

describe('HealthNetworkService', () => {
  let service: HealthNetworkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HealthNetworkService],
    }).compile();

    service = module.get<HealthNetworkService>(HealthNetworkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
