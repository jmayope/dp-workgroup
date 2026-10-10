import { AreaService } from './area.service';
export declare class AreaController {
    private readonly areaService;
    constructor(areaService: AreaService);
    create(body: any): Promise<any>;
    findAll(body: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
