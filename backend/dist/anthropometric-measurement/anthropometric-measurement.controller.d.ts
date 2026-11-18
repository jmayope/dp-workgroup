import { AnthropometricMeasurementService } from './anthropometric-measurement.service';
export declare class AnthropometricMeasurementController {
    private readonly anthropometricMeasurementService;
    constructor(anthropometricMeasurementService: AnthropometricMeasurementService);
    create(body: any): Promise<any>;
    findAll(body: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
