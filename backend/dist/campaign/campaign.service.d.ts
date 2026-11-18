import { Model } from 'mongoose';
export declare class CampaignService {
    private Campaign;
    constructor(Campaign: Model<any>);
    create(body: any): Promise<any>;
    findAll(where: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, updated: any): Promise<any>;
    remove(id: any): Promise<any>;
}
