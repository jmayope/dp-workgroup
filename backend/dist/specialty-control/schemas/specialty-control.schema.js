"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialtyControl = void 0;
const mongoose = require("mongoose");
exports.SpecialtyControl = new mongoose.Schema({
    specialty: { type: mongoose.Schema.Types.ObjectId, ref: 'specialties' },
    growthStage: { type: mongoose.Schema.Types.ObjectId, ref: 'growthstages' },
    name: { type: String, required: true },
    order: { type: Number, },
    description: { type: String },
    tag: { type: String },
    minimumRange: { type: Number },
    maximumRange: { type: Number },
    status: { type: Boolean }
});
//# sourceMappingURL=specialty-control.schema.js.map