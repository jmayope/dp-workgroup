import { Test, TestingModule } from '@nestjs/testing';
import { TypeListController } from './type-list.controller';
import { TypeListService } from './type-list.service';

describe('TypeListController', () => {
  let controller: TypeListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeListController],
      providers: [TypeListService],
    }).compile();

    controller = module.get<TypeListController>(TypeListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
