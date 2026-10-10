import { Test, TestingModule } from '@nestjs/testing';
import { ProfileMenuService } from './profile-menu.service';

describe('ProfileMenuService', () => {
  let service: ProfileMenuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfileMenuService],
    }).compile();

    service = module.get<ProfileMenuService>(ProfileMenuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
