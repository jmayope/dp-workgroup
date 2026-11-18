"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileMenu = void 0;
const mongoose = require("mongoose");
exports.ProfileMenu = new mongoose.Schema({
    menu: { type: mongoose.Types.ObjectId, ref: 'menus' },
    profile: { type: mongoose.Schema.Types.ObjectId, ref: 'profiles' }
});
//# sourceMappingURL=profile-menu.schema.js.map