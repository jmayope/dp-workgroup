import { Module } from '@nestjs/common';
import { HealthNetworkService } from './health-network.service';
import { HealthNetworkController } from './health-network.controller';
import { DatabaseModule } from 'src/database/database.module';
import { HealthNetworkProvider } from './providers/health-network.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [HealthNetworkController],
  providers: [HealthNetworkService, ...HealthNetworkProvider],
})
export class HealthNetworkModule {}
