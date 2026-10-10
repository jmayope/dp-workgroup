import { Module } from '@nestjs/common';
import { KardexMasterService } from './kardex-master.service';
import { KardexMasterController } from './kardex-master.controller';
import { DatabaseModule } from 'src/database/database.module';
import { KardexMasterProvider } from './providers/kardex-master.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [KardexMasterController],
  providers: [KardexMasterService, ...KardexMasterProvider],
})
export class KardexMasterModule {}
