"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeListProvider = void 0;
const type_list_schema_1 = require("../schemas/type-list.schema");
exports.TypeListProvider = [
    {
        provide: 'TYPE_LIST_MODEL',
        useFactory: (connection) => connection.model('typelists', type_list_schema_1.TypeList),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=type-list.provider.js.map