import { KardexService } from './kardex.service';
export declare class KardexController {
    private readonly kardexService;
    constructor(kardexService: KardexService);
    create(body: any): Promise<any>;
    findAll(body: any, query: any): Promise<any>;
    findLastRecords(body: any): Promise<any>;
    getQuantity(headers: any, body: any): Promise<{
        quantity: any;
    }>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
