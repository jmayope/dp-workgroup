import * as mongoose from 'mongoose';

export const KardexMaster = new mongoose.Schema({
  product: { type: mongoose.Schema.ObjectId, ref: 'products', required: true },
  availableStock: { type: Number },
  updateAt: { type: Date, default: Date.now },
  updateBy: { type: mongoose.Schema.ObjectId, ref: 'medicalStaffs'}
})

KardexMaster.index({"product.code": "text", "product.name": "text"})