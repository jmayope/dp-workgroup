"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoseProvider = void 0;
const dose_schema_1 = require("../schemas/dose.schema");
exports.DoseProvider = [
    {
        provide: 'DOSE_MODEL',
        useFactory: (connection) => connection.model('doses', dose_schema_1.Dose),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=dose.provider.js.map