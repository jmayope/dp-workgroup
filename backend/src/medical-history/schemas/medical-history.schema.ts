import * as mongoose from 'mongoose';

export const MedicalHistory = new mongoose.Schema({
    code: { type: String, },
    creationDate: { type: Date, default: Date.now },
    details: [],
    observation: { type: String },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'patients', required: true },
    status: { type: Boolean, default: true }
})