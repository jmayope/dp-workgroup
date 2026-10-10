import { Test, TestingModule } from '@nestjs/testing';
import { SpecialtyProcessController } from './specialty-process.controller';
import { SpecialtyProcessService } from './specialty-process.service';

describe('SpecialtyProcessController', () => {
  let controller: SpecialtyProcessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpecialtyProcessController],
      providers: [SpecialtyProcessService],
    }).compile();

    controller = module.get<SpecialtyProcessController>(SpecialtyProcessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
