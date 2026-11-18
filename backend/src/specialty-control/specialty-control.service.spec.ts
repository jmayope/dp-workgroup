import { Test, TestingModule } from '@nestjs/testing';
import { SpecialtyControlService } from './specialty-control.service';

describe('SpecialtyControlService', () => {
  let service: SpecialtyControlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecialtyControlService],
    }).compile();

    service = module.get<SpecialtyControlService>(SpecialtyControlService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
