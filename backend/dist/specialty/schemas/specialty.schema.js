"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Specialty = void 0;
const mongoose = require("mongoose");
exports.Specialty = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String }
});
//# sourceMappingURL=specialty.schema.js.map