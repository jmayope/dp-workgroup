import { Model } from 'mongoose';
export declare class HealthNetworkService {
    private HealthNetwork;
    constructor(HealthNetwork: Model<any>);
    create(body: any): Promise<any>;
    findAll(where: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, updated: any): Promise<any>;
    remove(id: any): Promise<any>;
}
