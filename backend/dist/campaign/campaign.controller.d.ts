import { CampaignService } from './campaign.service';
export declare class CampaignController {
    private readonly campaignService;
    constructor(campaignService: CampaignService);
    create(body: any): Promise<any>;
    findAll(body: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
