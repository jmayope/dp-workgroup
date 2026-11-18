"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaccineProvider = void 0;
const vaccine_schema_1 = require("../schemas/vaccine.schema");
exports.VaccineProvider = [
    {
        provide: 'VACCINE_MODEL',
        useFactory: (connection) => connection.model('vaccines', vaccine_schema_1.Vaccine),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=vaccine.provider.js.map