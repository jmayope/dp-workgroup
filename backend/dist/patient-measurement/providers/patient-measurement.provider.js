"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientMeasurementProvider = void 0;
const patient_measurement_schema_1 = require("../schemas/patient-measurement.schema");
exports.PatientMeasurementProvider = [
    {
        provide: 'PATIENT_MEASUREMENT_MODEL',
        useFactory: (connection) => connection.model('patientmeasurements', patient_measurement_schema_1.PatientMeasurement),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=patient-measurement.provider.js.map