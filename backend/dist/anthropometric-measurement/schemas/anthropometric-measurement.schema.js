"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnthropometricMeasurement = void 0;
const mongoose = require("mongoose");
exports.AnthropometricMeasurement = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    measurementUnit: { type: String },
    category: { type: String },
    status: { type: Boolean, default: true }
});
//# sourceMappingURL=anthropometric-measurement.schema.js.map