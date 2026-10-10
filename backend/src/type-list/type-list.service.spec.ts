import { Test, TestingModule } from '@nestjs/testing';
import { TypeListService } from './type-list.service';

describe('TypeListService', () => {
  let service: TypeListService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeListService],
    }).compile();

    service = module.get<TypeListService>(TypeListService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
