"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalStaffProvider = void 0;
const medical_staff_schema_1 = require("../schemas/medical-staff.schema");
exports.MedicalStaffProvider = [
    {
        provide: 'MEDICAL_STAFF_MODEL',
        useFactory: (connection) => connection.model('medicalStaffs', medical_staff_schema_1.MedicalStaff),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=medical-staff.provider.js.map