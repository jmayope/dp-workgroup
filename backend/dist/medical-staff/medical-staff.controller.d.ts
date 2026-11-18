import { MedicalStaffService } from './medical-staff.service';
export declare class MedicalStaffController {
    private readonly medicalStaffService;
    constructor(medicalStaffService: MedicalStaffService);
    create(body: any): Promise<any>;
    findAll(body: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
