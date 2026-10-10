import { Test, TestingModule } from '@nestjs/testing';
import { AnthropometricMeasurementService } from './anthropometric-measurement.service';

describe('AnthropometricMeasurementService', () => {
  let service: AnthropometricMeasurementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnthropometricMeasurementService],
    }).compile();

    service = module.get<AnthropometricMeasurementService>(AnthropometricMeasurementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
