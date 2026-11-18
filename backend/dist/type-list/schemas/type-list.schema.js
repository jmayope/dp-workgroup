"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeList = void 0;
const mongoose = require("mongoose");
exports.TypeList = new mongoose.Schema({
    type: { type: String, required: true },
    code: { type: String, required: true },
    name: { type: String },
    description: { type: String },
    valueToCalculate: { type: Number },
    additionalFields: { type: Object },
    status: { type: Boolean, default: true }
});
//# sourceMappingURL=type-list.schema.js.map