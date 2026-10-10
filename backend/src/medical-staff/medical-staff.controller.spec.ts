import { Test, TestingModule } from '@nestjs/testing';
import { MedicalStaffController } from './medical-staff.controller';
import { MedicalStaffService } from './medical-staff.service';

describe('MedicalStaffController', () => {
  let controller: MedicalStaffController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MedicalStaffController],
      providers: [MedicalStaffService],
    }).compile();

    controller = module.get<MedicalStaffController>(MedicalStaffController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
