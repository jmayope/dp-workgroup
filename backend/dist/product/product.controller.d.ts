import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(body: any): Promise<any>;
    findAll(body: any): Promise<any>;
    getQuantity(headers: any, body: any): Promise<{
        quantity: any;
    }>;
    findOne(id: any): Promise<any>;
    update(id: any, body: any): Promise<any>;
    remove(id: any): Promise<any>;
}
