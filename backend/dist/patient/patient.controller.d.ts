import { PatientService } from './patient.service';
export declare class PatientController {
    private readonly patientService;
    constructor(patientService: PatientService);
    create(body: any): Promise<any>;
    findAll(headers: any, body: any): Promise<any>;
    getQuantity(headers: any, body: any): Promise<{
        quantity: any;
    }>;
    export(body: any): Promise<{
        existsData: boolean;
        filename: string;
    } | {
        existsData: boolean;
        filename?: undefined;
    }>;
    migrate(file: Express.Multer.File): Promise<{
        status: boolean;
        message: string;
    }>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
