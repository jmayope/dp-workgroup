"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose = require("mongoose");
exports.Product = new mongoose.Schema({
    category: { type: mongoose.Schema.ObjectId, ref: 'typeLists', required: true },
    code: { type: String },
    name: { type: String },
    description: { type: String },
    measurementUnit: { type: mongoose.Schema.ObjectId, ref: 'typeLists' },
    minimumStock: { type: Number },
    location: { type: String },
    provider: { type: String },
    status: { type: Boolean, default: true },
    createAt: { type: Date, default: Date.now },
    createBy: { type: mongoose.Schema.ObjectId, ref: 'medicalStaffs' },
    updateAt: { type: Date },
    updateBy: { type: mongoose.Schema.ObjectId, ref: 'medicalStaffs' },
});
//# sourceMappingURL=product.schema.js.map