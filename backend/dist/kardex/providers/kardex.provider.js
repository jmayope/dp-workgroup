"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KardexProvider = void 0;
const kardex_schema_1 = require("../schemas/kardex.schema");
exports.KardexProvider = [
    {
        provide: 'KARDEX_MODEL',
        useFactory: (connection) => connection.model('kardexs', kardex_schema_1.Kardex),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=kardex.provider.js.map