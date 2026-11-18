"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalHistory = void 0;
const mongoose = require("mongoose");
exports.MedicalHistory = new mongoose.Schema({
    code: { type: String, },
    creationDate: { type: Date, default: Date.now },
    details: [],
    observation: { type: String },
    patient: { type: mongoose.Schema.Types.ObjectId, ref: 'patients', required: true },
    status: { type: Boolean, default: true }
});
//# sourceMappingURL=medical-history.schema.js.map