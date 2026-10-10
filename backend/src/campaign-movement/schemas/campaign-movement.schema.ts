import * as mongoose from "mongoose"

export const CampaignMovement = new mongoose.Schema({
  campaign: { type: mongoose.Schema.Types.ObjectId, ref: 'campaigns' },
  resource: {},
  personal: {},
  obs: { type: String },
  movementStatus: { type: mongoose.Schema.Types.ObjectId, ref: 'typeLists' },
  status: { type: Boolean, default: true },
  createAt: { type: Date, default: Date.now }
})
