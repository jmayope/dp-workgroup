import { Model } from 'mongoose';
export declare class KardexMasterService {
    private KardexMaster;
    constructor(KardexMaster: Model<any>);
    create(body: any): Promise<any>;
    getQuantity(where: any): Promise<{
        quantity: any;
    }>;
    findAll(where: any, options?: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, updated: any): Promise<any>;
    remove(id: any): Promise<any>;
}
