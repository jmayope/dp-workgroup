import { Test, TestingModule } from '@nestjs/testing';
import { AnthropometricMeasurementController } from './anthropometric-measurement.controller';
import { AnthropometricMeasurementService } from './anthropometric-measurement.service';

describe('AnthropometricMeasurementController', () => {
  let controller: AnthropometricMeasurementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnthropometricMeasurementController],
      providers: [AnthropometricMeasurementService],
    }).compile();

    controller = module.get<AnthropometricMeasurementController>(AnthropometricMeasurementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
