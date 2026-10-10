import { SpecialtyService } from './specialty.service';
export declare class SpecialtyController {
    private readonly specialtyService;
    constructor(specialtyService: SpecialtyService);
    create(body: any): Promise<any>;
    findAll(body: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
