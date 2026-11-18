import { SpecialtyProcessService } from './specialty-process.service';
export declare class SpecialtyProcessController {
    private readonly specialtyProcessService;
    constructor(specialtyProcessService: SpecialtyProcessService);
    create(body: any): Promise<any>;
    findAll(body: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
