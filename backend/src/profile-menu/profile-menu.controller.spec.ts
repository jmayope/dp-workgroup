import { Test, TestingModule } from '@nestjs/testing';
import { ProfileMenuController } from './profile-menu.controller';
import { ProfileMenuService } from './profile-menu.service';

describe('ProfileMenuController', () => {
  let controller: ProfileMenuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfileMenuController],
      providers: [ProfileMenuService],
    }).compile();

    controller = module.get<ProfileMenuController>(ProfileMenuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
