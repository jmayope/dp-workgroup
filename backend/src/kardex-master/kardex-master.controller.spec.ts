import { Test, TestingModule } from '@nestjs/testing';
import { KardexMasterController } from './kardex-master.controller';
import { KardexMasterService } from './kardex-master.service';

describe('KardexMasterController', () => {
  let controller: KardexMasterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KardexMasterController],
      providers: [KardexMasterService],
    }).compile();

    controller = module.get<KardexMasterController>(KardexMasterController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
