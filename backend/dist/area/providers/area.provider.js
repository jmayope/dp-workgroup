"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaProvider = void 0;
const area_schema_1 = require("../schemas/area.schema");
exports.AreaProvider = [
    {
        provide: 'AREA_MODEL',
        useFactory: (connection) => connection.model('areas', area_schema_1.Area),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=area.provider.js.map