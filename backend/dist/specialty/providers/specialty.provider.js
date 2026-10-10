"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialtyProvider = void 0;
const specialty_schema_1 = require("../schemas/specialty.schema");
exports.SpecialtyProvider = [
    {
        provide: 'SPECIALTY_MODEL',
        useFactory: (connection) => connection.model('specialties', specialty_schema_1.Specialty),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=specialty.provider.js.map