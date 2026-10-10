"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignMovement = void 0;
const mongoose = require("mongoose");
exports.CampaignMovement = new mongoose.Schema({
    campaign: { type: mongoose.Schema.Types.ObjectId, ref: 'campaigns' },
    resource: {},
    personal: {},
    obs: { type: String },
    movementStatus: { type: mongoose.Schema.Types.ObjectId, ref: 'typeLists' },
    status: { type: Boolean, default: true },
    createAt: { type: Date, default: Date.now }
});
//# sourceMappingURL=campaign-movement.schema.js.map