import { Test, TestingModule } from '@nestjs/testing';
import { SpecialtyProcessService } from './specialty-process.service';

describe('SpecialtyProcessService', () => {
  let service: SpecialtyProcessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpecialtyProcessService],
    }).compile();

    service = module.get<SpecialtyProcessService>(SpecialtyProcessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
