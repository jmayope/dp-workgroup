import { Model } from 'mongoose';
export declare class MenuService {
    private Menu;
    constructor(Menu: Model<any>);
    create(body: any): Promise<any>;
    findAll(where: any, options?: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, updated: any): Promise<any>;
    remove(id: any): Promise<any>;
}
