import { VaccineService } from './vaccine.service';
export declare class VaccineController {
    private readonly vaccineService;
    constructor(vaccineService: VaccineService);
    create(body: any): Promise<any>;
    findAll(body: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
