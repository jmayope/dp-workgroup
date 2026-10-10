import * as mongoose from 'mongoose';

export const Specialty = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String }
})