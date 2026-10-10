import * as mongoose from 'mongoose';

export const GrowthStage = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    vaccines: [{type: mongoose.Schema.Types.ObjectId, ref: 'vaccines'}],
    status: { type: Boolean, default: true }
});

GrowthStage.index({name: 'text', description: 'text'});