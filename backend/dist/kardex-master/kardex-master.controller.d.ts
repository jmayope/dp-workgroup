import { KardexMasterService } from './kardex-master.service';
export declare class KardexMasterController {
    private readonly kardexMasterService;
    constructor(kardexMasterService: KardexMasterService);
    create(body: any): Promise<any>;
    findAll(body: any, query: any): Promise<any>;
    getQuantity(headers: any, body: any): Promise<{
        quantity: any;
    }>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
