import { PatientMeasurementService } from './patient-measurement.service';
export declare class PatientMeasurementController {
    private readonly patientMeasurementService;
    constructor(patientMeasurementService: PatientMeasurementService);
    create(body: any): Promise<any>;
    findAll(body: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
