import { Module } from '@nestjs/common';
import { KardexService } from './kardex.service';
import { KardexController } from './kardex.controller';
import { DatabaseModule } from 'src/database/database.module';
import { KardexProvider } from './providers/kardex.provider';
import { KardexMasterProvider } from 'src/kardex-master/providers/kardex-master.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [KardexController],
  providers: [KardexService, ...KardexProvider, ...KardexMasterProvider],
})
export class KardexModule {}
