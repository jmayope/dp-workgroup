"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dose = void 0;
const mongoose = require("mongoose");
exports.Dose = new mongoose.Schema({
    vaccine: { type: mongoose.Types.ObjectId, ref: 'typelists' },
    number: { type: Number },
    name: { type: String },
    growthStage: { type: mongoose.Types.ObjectId, ref: 'growthstages' },
    description: { type: String },
    status: { type: Boolean, default: true },
    createAt: { type: Date, default: Date.now }
});
//# sourceMappingURL=dose.schema.js.map