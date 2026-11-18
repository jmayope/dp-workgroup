import { Module } from '@nestjs/common';
import { AnthropometricMeasurementService } from './anthropometric-measurement.service';
import { AnthropometricMeasurementController } from './anthropometric-measurement.controller';
import { DatabaseModule } from 'src/database/database.module';
import { AnthropometricMeasurementProvider } from './providers/anthropometric-measurement.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [AnthropometricMeasurementController],
  providers: [AnthropometricMeasurementService, ...AnthropometricMeasurementProvider],
})
export class AnthropometricMeasurementModule {}
