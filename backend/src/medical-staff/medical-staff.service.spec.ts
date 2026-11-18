import { Test, TestingModule } from '@nestjs/testing';
import { MedicalStaffService } from './medical-staff.service';

describe('MedicalStaffService', () => {
  let service: MedicalStaffService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MedicalStaffService],
    }).compile();

    service = module.get<MedicalStaffService>(MedicalStaffService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
