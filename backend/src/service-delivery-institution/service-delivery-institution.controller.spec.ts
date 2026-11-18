import { Test, TestingModule } from '@nestjs/testing';
import { ServiceDeliveryInstitutionController } from './service-delivery-institution.controller';
import { ServiceDeliveryInstitutionService } from './service-delivery-institution.service';

describe('ServiceDeliveryInstitutionController', () => {
  let controller: ServiceDeliveryInstitutionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceDeliveryInstitutionController],
      providers: [ServiceDeliveryInstitutionService],
    }).compile();

    controller = module.get<ServiceDeliveryInstitutionController>(ServiceDeliveryInstitutionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
