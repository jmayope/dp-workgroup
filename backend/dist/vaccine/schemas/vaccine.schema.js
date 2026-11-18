"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vaccine = void 0;
const mongoose = require("mongoose");
exports.Vaccine = new mongoose.Schema({
    name: { type: String },
    code: { type: String, unique: true },
    description: { type: String },
    status: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
    createdBy: { type: mongoose.Types.ObjectId, ref: 'medicalstaffs' },
    updatedAt: { type: Date },
    updatedBy: { type: mongoose.Types.ObjectId, ref: 'medicalstaffs' },
});
//# sourceMappingURL=vaccine.schema.js.map