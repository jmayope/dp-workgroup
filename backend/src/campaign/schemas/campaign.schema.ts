import * as mongoose from "mongoose"


export const Campaign = new mongoose.Schema({
  serviceDeliveryInstitution: { type: mongoose.Schema.Types.ObjectId, ref: 'serviceDeliveryInstitutions' },
  name: { type: String },
  campaignType: { type: mongoose.Schema.Types.ObjectId, ref: 'typeLists' },
  startDate: { type: Date },
  finishDate: { type: Date },
  usageExternalForm: { type: Boolean, default: false },
  urlExternalForm: { type: String, },
  resources: [],
  personal: [],
  campaignStatus: { type: mongoose.Schema.Types.ObjectId, ref: 'typeLists' },
  status: { type: Boolean, default: true },
  createAt: { type: Date, default: Date.now }
})
