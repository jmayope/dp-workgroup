import { CampaignMovementService } from './campaign-movement.service';
export declare class CampaignMovementController {
    private readonly campaignMovementService;
    constructor(campaignMovementService: CampaignMovementService);
    create(body: any): Promise<any>;
    findAll(body: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
