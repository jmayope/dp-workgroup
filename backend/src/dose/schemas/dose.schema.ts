import * as mongoose from "mongoose"

export const Dose = new mongoose.Schema({
  vaccine: { type: mongoose.Types.ObjectId, ref: 'typelists' },
  number: { type: Number },
  name: { type: String },
  growthStage: { type: mongoose.Types.ObjectId, ref: 'growthstages' },
  description: { type: String },
  status: { type: Boolean, default: true },
  createAt: { type: Date, default: Date.now }
})
