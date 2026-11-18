"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientProvider = void 0;
const patient_schema_1 = require("../schemas/patient.schema");
exports.PatientProvider = [
    {
        provide: 'PATIENT_MODEL',
        useFactory: (connection) => connection.model('patients', patient_schema_1.Patient),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=patient.provider.js.map