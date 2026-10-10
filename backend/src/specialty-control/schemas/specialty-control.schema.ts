import * as mongoose from 'mongoose';

export const SpecialtyControl = new mongoose.Schema({
    specialty: { type: mongoose.Schema.Types.ObjectId, ref: 'specialties' },
    growthStage: { type: mongoose.Schema.Types.ObjectId, ref: 'growthstages' },
    name: { type: String, required: true },
    order: { type: Number, },
    description: { type: String },
    tag: { type: String },
    minimumRange: { type: Number },
    maximumRange: { type: Number },
    status: { type: Boolean }
})