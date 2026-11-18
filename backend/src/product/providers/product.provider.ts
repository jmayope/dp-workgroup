import { Connection } from 'mongoose';
import { Product } from '../schemas/product.schema';

export const ProductProvider = [
    {
        provide: 'PRODUCT_MODEL',
        useFactory: (connection: Connection) => connection.model('products', Product),
        inject: ['DATABASE_CONNECTION']
    }
]