import * as mongoose from 'mongoose';

export const KardexMaster = new mongoose.Schema({
  product: { type: mongoose.Schema.ObjectId, ref: 'products', required: true },
  serviceDeliveryInstitution: { type: mongoose.Schema.ObjectId, ref: 'serviceDeliveryInstitutions', },
  availableStock: { type: Number },
  createAt: { type: Date, default: Date.now},
  createBy: { type: mongoose.Schema.ObjectId, ref: 'medicalStaffs'},
  updateAt: { type: Date, default: Date.now },
  updateBy: { type: mongoose.Schema.ObjectId, ref: 'medicalStaffs'}
})

KardexMaster.index({"product.code": "text", "product.name": "text"})