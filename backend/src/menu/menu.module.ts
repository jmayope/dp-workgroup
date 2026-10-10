import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { DatabaseModule } from 'src/database/database.module';
import { MenuProvider } from './providers/menu.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [MenuController],
  providers: [MenuService, ...MenuProvider],
})
export class MenuModule {}
