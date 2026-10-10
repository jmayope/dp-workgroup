"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kardex = void 0;
const mongoose = require("mongoose");
exports.Kardex = new mongoose.Schema({
    product: { type: mongoose.Schema.ObjectId, ref: 'products', required: true },
    inputType: { type: mongoose.Schema.ObjectId, ref: 'typeLists', required: true },
    previousQuantity: { type: Number },
    quantity: { type: Number },
    nextQuantity: { type: Number },
    reason: { type: String },
    assignedTo: { type: mongoose.Schema.ObjectId, ref: 'medicalStaffs' },
    status: { type: mongoose.Schema.ObjectId, ref: 'typeLists' },
    createAt: { type: Date, default: Date.now },
    createBy: { type: mongoose.Schema.ObjectId, ref: 'medicalStaffs' },
    updateAt: { type: Date },
    updateBy: { type: mongoose.Schema.ObjectId, ref: 'medicalStaffs' },
});
exports.Kardex.index({ "product.code": "text", "product.name": "text", reason: "text" });
//# sourceMappingURL=kardex.schema.js.map