"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductProvider = void 0;
const product_schema_1 = require("../schemas/product.schema");
exports.ProductProvider = [
    {
        provide: 'PRODUCT_MODEL',
        useFactory: (connection) => connection.model('products', product_schema_1.Product),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=product.provider.js.map