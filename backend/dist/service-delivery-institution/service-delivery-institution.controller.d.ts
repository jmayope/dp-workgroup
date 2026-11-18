import { ServiceDeliveryInstitutionService } from './service-delivery-institution.service';
export declare class ServiceDeliveryInstitutionController {
    private readonly serviceDeliveryInstitutionService;
    constructor(serviceDeliveryInstitutionService: ServiceDeliveryInstitutionService);
    create(body: any): Promise<any>;
    findAll(body: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
