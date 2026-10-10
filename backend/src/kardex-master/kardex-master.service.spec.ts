import { Test, TestingModule } from '@nestjs/testing';
import { KardexMasterService } from './kardex-master.service';

describe('KardexMasterService', () => {
  let service: KardexMasterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KardexMasterService],
    }).compile();

    service = module.get<KardexMasterService>(KardexMasterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
