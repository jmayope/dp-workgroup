import { Test, TestingModule } from '@nestjs/testing';
import { PatientMeasurementService } from './patient-measurement.service';

describe('PatientMeasurementService', () => {
  let service: PatientMeasurementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PatientMeasurementService],
    }).compile();

    service = module.get<PatientMeasurementService>(PatientMeasurementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
