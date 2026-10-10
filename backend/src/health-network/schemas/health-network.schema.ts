import * as mongoose from 'mongoose';

export const HealthNetwork = new mongoose.Schema({
    name: { type: String, required: true },
    abbr: { type: String, },
    description: { type: String },
    status: { type: Boolean, default: true }
})