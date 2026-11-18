import { Model } from 'mongoose';
export declare class PatientService {
    private Patient;
    private MedicalHistory;
    private MedicalStaff;
    constructor(Patient: Model<any>, MedicalHistory: Model<any>, MedicalStaff: Model<any>);
    create(body: any): Promise<any>;
    getQuantity(where: any): Promise<{
        quantity: any;
    }>;
    findAll(where: any, pagination?: any): Promise<any>;
    export(where: any): Promise<{
        existsData: boolean;
        filename: string;
    } | {
        existsData: boolean;
        filename?: undefined;
    }>;
    excelDateToJSDate(serial: any): Date;
    migrate(file: any): Promise<{
        status: boolean;
        message: string;
    }>;
    findOne(id: any): Promise<any>;
    update(id: any, updated: any): Promise<any>;
    remove(id: any): Promise<any>;
}
