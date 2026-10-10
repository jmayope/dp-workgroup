import { SpecialtyControlService } from './specialty-control.service';
export declare class SpecialtyControlController {
    private readonly specialtyControlService;
    constructor(specialtyControlService: SpecialtyControlService);
    create(body: any): Promise<any>;
    findAll(body: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
