import { Module } from '@nestjs/common';
import { ProfileMenuService } from './profile-menu.service';
import { ProfileMenuController } from './profile-menu.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ProfileMenuProvider } from './providers/profile-menu.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ProfileMenuController],
  providers: [ProfileMenuService, ...ProfileMenuProvider],
})
export class ProfileMenuModule {}
