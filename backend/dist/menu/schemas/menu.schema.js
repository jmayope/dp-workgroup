"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = void 0;
const mongoose = require("mongoose");
exports.Menu = new mongoose.Schema({
    identifier: { type: String, },
    name: { type: String, required: true },
    icon: { type: String, },
    status: { type: Boolean, default: true },
    url: { type: String, },
    parent: { type: mongoose.Schema.Types.ObjectId, ref: 'menus' },
});
//# sourceMappingURL=menu.schema.js.map