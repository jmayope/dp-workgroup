import { Test, TestingModule } from '@nestjs/testing';
import { ServiceDeliveryInstitutionService } from './service-delivery-institution.service';

describe('ServiceDeliveryInstitutionService', () => {
  let service: ServiceDeliveryInstitutionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceDeliveryInstitutionService],
    }).compile();

    service = module.get<ServiceDeliveryInstitutionService>(ServiceDeliveryInstitutionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
