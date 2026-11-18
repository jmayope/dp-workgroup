import { Test, TestingModule } from '@nestjs/testing';
import { HealthNetworkController } from './health-network.controller';
import { HealthNetworkService } from './health-network.service';

describe('HealthNetworkController', () => {
  let controller: HealthNetworkController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthNetworkController],
      providers: [HealthNetworkService],
    }).compile();

    controller = module.get<HealthNetworkController>(HealthNetworkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
