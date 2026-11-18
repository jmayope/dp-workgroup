import { TypeListService } from './type-list.service';
export declare class TypeListController {
    private readonly typeListService;
    constructor(typeListService: TypeListService);
    create(body: any): Promise<any>;
    findAll(body: any, query: any): Promise<any>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
