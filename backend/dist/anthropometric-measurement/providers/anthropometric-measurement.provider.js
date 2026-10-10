"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnthropometricMeasurementProvider = void 0;
const anthropometric_measurement_schema_1 = require("../schemas/anthropometric-measurement.schema");
exports.AnthropometricMeasurementProvider = [
    {
        provide: 'ANTHROPOMETRIC_MEASUREMENT_MODEL',
        useFactory: (connection) => connection.model('anthropometricmeasurements', anthropometric_measurement_schema_1.AnthropometricMeasurement),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=anthropometric-measurement.provider.js.map