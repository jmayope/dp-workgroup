import { Test, TestingModule } from '@nestjs/testing';
import { PatientMeasurementController } from './patient-measurement.controller';
import { PatientMeasurementService } from './patient-measurement.service';

describe('PatientMeasurementController', () => {
  let controller: PatientMeasurementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PatientMeasurementController],
      providers: [PatientMeasurementService],
    }).compile();

    controller = module.get<PatientMeasurementController>(PatientMeasurementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
