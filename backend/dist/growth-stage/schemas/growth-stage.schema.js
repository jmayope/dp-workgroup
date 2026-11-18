"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrowthStage = void 0;
const mongoose = require("mongoose");
exports.GrowthStage = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    vaccines: [{ type: mongoose.Schema.Types.ObjectId, ref: 'vaccines' }],
    status: { type: Boolean, default: true }
});
exports.GrowthStage.index({ name: 'text', description: 'text' });
//# sourceMappingURL=growth-stage.schema.js.map