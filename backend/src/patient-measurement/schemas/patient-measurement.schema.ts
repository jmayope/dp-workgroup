import * as mongoose from 'mongoose';

export const PatientMeasurement = new mongoose.Schema({
    growthStage: { type: mongoose.Schema.Types.ObjectId, ref: 'growthstages' },
    anthropometricMeasurement: { type: mongoose.Schema.Types.ObjectId, ref: 'anthropometricmeasurements' },
    values: { type: Object },
    status: { type: Boolean, default: true },
    obs: { type: String },
    createAt: { type: Date, default: Date.now }
});