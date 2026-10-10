import { Module } from '@nestjs/common';
import { ServiceDeliveryInstitutionService } from './service-delivery-institution.service';
import { ServiceDeliveryInstitutionController } from './service-delivery-institution.controller';
import { DatabaseModule } from 'src/database/database.module';
import { ServiceDeliveryInstitutionProvider } from './providers/service-delivery-institution.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [ServiceDeliveryInstitutionController],
  providers: [ServiceDeliveryInstitutionService, ...ServiceDeliveryInstitutionProvider],
})
export class ServiceDeliveryInstitutionModule {}
