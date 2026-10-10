import { Module } from '@nestjs/common';
import { DoseService } from './dose.service';
import { DoseController } from './dose.controller';
import { DatabaseModule } from 'src/database/database.module';
import { DoseProvider } from './providers/dose.provider';

@Module({
  imports: [ DatabaseModule ],
  controllers: [DoseController],
  providers: [DoseService, ...DoseProvider],
})
export class DoseModule {}
