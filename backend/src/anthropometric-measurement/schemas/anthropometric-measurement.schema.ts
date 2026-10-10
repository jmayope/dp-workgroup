import * as mongoose from 'mongoose';

export const AnthropometricMeasurement = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  measurementUnit: { type: String},
  category: { type: String },
  status: { type: Boolean, default: true }
});
