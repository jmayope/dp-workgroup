"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialtyProcessProvider = void 0;
const specialty_process_schema_1 = require("../schemas/specialty-process.schema");
exports.SpecialtyProcessProvider = [
    {
        provide: 'SPECIALTY_PROCESS_MODEL',
        useFactory: (connection) => connection.model('specialtyProcesses', specialty_process_schema_1.SpecialtyProcess),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=specialty-process.provider.js.map