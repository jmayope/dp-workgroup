import { Module } from '@nestjs/common';
import { ReniecService } from './reniec.service';
import { ReniecController } from './reniec.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 10000,
      maxRedirects: 5
    })
  ],
  controllers: [ReniecController],
  providers: [ReniecService],
  exports: [ReniecService]
})
export class ReniecModule {}
