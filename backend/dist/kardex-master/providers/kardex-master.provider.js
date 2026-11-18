"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KardexMasterProvider = void 0;
const kardex_master_schema_1 = require("../schemas/kardex-master.schema");
exports.KardexMasterProvider = [
    {
        provide: 'KARDEX_MASTER_MODEL',
        useFactory: (connection) => connection.model('kardexmasters', kardex_master_schema_1.KardexMaster),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=kardex-master.provider.js.map