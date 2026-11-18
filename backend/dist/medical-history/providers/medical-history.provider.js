"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalHistoryProvider = void 0;
const medical_history_schema_1 = require("../schemas/medical-history.schema");
exports.MedicalHistoryProvider = [
    {
        provide: 'MEDICAL_HISTORY_MODEL',
        useFactory: (connection) => connection.model('medicalHistories', medical_history_schema_1.MedicalHistory),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=medical-history.provider.js.map