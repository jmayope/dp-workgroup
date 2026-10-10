import { Test, TestingModule } from '@nestjs/testing';
import { SpecialtyControlController } from './specialty-control.controller';
import { SpecialtyControlService } from './specialty-control.service';

describe('SpecialtyControlController', () => {
  let controller: SpecialtyControlController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecialtyControlController],
      providers: [SpecialtyControlService],
    }).compile();

    controller = module.get<SpecialtyControlController>(SpecialtyControlController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
