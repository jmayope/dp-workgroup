import * as mongoose from 'mongoose';

export const TypeList = new mongoose.Schema({
  type: { type: String, required: true },
  code: { type: String, required: true },
  name: { type: String },
  description: { type: String },
  valueToCalculate: { type: Number },
  additionalFields: { type: Object },
  status: { type: Boolean, default: true }
})