import { Module } from '@nestjs/common';
import { TypeListService } from './type-list.service';
import { TypeListController } from './type-list.controller';
import { DatabaseModule } from 'src/database/database.module';
import { TypeListProvider } from './providers/type-list.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [TypeListController],
  providers: [TypeListService, ...TypeListProvider],
})
export class TypeListModule {}
