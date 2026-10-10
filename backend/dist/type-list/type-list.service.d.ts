import { Model } from 'mongoose';
export declare class TypeListService {
    private TypeList;
    constructor(TypeList: Model<any>);
    create(body: any): Promise<any>;
    findAll(where: any, options?: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, updated: any): Promise<any>;
    remove(id: any): Promise<any>;
}
