import { MedicalHistoryService } from './medical-history.service';
export declare class MedicalHistoryController {
    private readonly medicalHistoryService;
    constructor(medicalHistoryService: MedicalHistoryService);
    create(body: any): Promise<any>;
    findAll(body: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
