import { DoseService } from './dose.service';
export declare class DoseController {
    private readonly doseService;
    constructor(doseService: DoseService);
    create(body: any): Promise<any>;
    findAll(body: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
