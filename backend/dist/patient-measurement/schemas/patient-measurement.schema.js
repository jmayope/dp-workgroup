"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientMeasurement = void 0;
const mongoose = require("mongoose");
exports.PatientMeasurement = new mongoose.Schema({
    growthStage: { type: mongoose.Schema.Types.ObjectId, ref: 'growthstages' },
    anthropometricMeasurement: { type: mongoose.Schema.Types.ObjectId, ref: 'anthropometricmeasurements' },
    values: { type: Object },
    status: { type: Boolean, default: true },
    obs: { type: String },
    createAt: { type: Date, default: Date.now }
});
//# sourceMappingURL=patient-measurement.schema.js.map