"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const mongoose = require("mongoose");
exports.Profile = new mongoose.Schema({
    name: { type: String, required: true },
    shortName: { type: String, },
    description: { type: String },
    specialty: { type: mongoose.Schema.Types.ObjectId, ref: 'specialties' },
    status: { type: Boolean, default: true }
});
//# sourceMappingURL=profile.schema.js.map