"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialtyProcess = void 0;
const mongoose = require("mongoose");
exports.SpecialtyProcess = new mongoose.Schema({
    specialty: { type: mongoose.Schema.Types.ObjectId, ref: 'specialties' },
    name: { type: String, required: true },
    description: { type: String, }
});
//# sourceMappingURL=specialty-process.schema.js.map