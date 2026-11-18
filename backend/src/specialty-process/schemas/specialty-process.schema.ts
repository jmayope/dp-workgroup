import * as mongoose from 'mongoose';

export const SpecialtyProcess = new mongoose.Schema({
    specialty: { type: mongoose.Schema.Types.ObjectId, ref: 'specialties' },
    name: { type: String, required: true },
    description: { type: String, }
})