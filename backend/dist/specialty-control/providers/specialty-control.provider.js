"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialtyControlProvider = void 0;
const specialty_control_schema_1 = require("../schemas/specialty-control.schema");
exports.SpecialtyControlProvider = [
    {
        provide: 'SPECIALTY_CONTROL_MODEL',
        useFactory: (connection) => connection.model('specialtyControls', specialty_control_schema_1.SpecialtyControl),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=specialty-control.provider.js.map