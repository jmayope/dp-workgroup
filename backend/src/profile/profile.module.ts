import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ProfileProvider } from './providers/profile.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ProfileController],
  providers: [ProfileService, ...ProfileProvider],
})
export class ProfileModule {}
