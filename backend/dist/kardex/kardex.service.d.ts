import { Model } from 'mongoose';
export declare class KardexService {
    private Kardex;
    private KardexMaster;
    constructor(Kardex: Model<any>, KardexMaster: Model<any>);
    create(body: any): Promise<any>;
    findLastRecords(pagination?: any): Promise<any>;
    getQuantity(where: any): Promise<{
        quantity: any;
    }>;
    findAll(where: any, options?: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, updated: any): Promise<any>;
    remove(id: any): Promise<any>;
}
