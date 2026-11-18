import { GrowthStageService } from './growth-stage.service';
export declare class GrowthStageController {
    private readonly growthStageService;
    constructor(growthStageService: GrowthStageService);
    create(body: any): Promise<any>;
    findAll(body: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
