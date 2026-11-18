import { Model } from 'mongoose';
export declare class ProductService {
    private Product;
    constructor(Product: Model<any>);
    create(body: any): Promise<any>;
    findAll(where: any): Promise<any>;
    getQuantity(where: any): Promise<{
        quantity: any;
    }>;
    findOne(id: any): Promise<any>;
    update(id: any, updated: any): Promise<any>;
    remove(id: any): Promise<any>;
}
