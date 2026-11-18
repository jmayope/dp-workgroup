import * as mongoose from 'mongoose';

export const Vaccine = new mongoose.Schema({
    name: { type: String },
    code: { type: String, unique: true},
    description: { type: String},
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Types.ObjectId, ref: 'medicalstaffs'},
    updatedAt: { type: Date },
    updatedBy: { type: mongoose.Types.ObjectId, ref: 'medicalstaffs'},
});