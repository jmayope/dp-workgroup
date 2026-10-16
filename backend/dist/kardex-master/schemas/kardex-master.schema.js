"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KardexMaster = void 0;
const mongoose = require("mongoose");
exports.KardexMaster = new mongoose.Schema({
    product: { type: mongoose.Schema.ObjectId, ref: 'products', required: true },
    serviceDeliveryInstitution: { type: mongoose.Schema.ObjectId, ref: 'serviceDeliveryInstitutions', },
    availableStock: { type: Number },
    createAt: { type: Date, default: Date.now },
    createBy: { type: mongoose.Schema.ObjectId, ref: 'medicalStaffs' },
    updateAt: { type: Date, default: Date.now },
    updateBy: { type: mongoose.Schema.ObjectId, ref: 'medicalStaffs' }
});
exports.KardexMaster.index({ "product.code": "text", "product.name": "text" });
//# sourceMappingURL=kardex-master.schema.js.map