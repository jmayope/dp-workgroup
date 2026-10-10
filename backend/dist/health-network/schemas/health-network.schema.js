"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthNetwork = void 0;
const mongoose = require("mongoose");
exports.HealthNetwork = new mongoose.Schema({
    name: { type: String, required: true },
    abbr: { type: String, },
    description: { type: String },
    status: { type: Boolean, default: true }
});
//# sourceMappingURL=health-network.schema.js.map