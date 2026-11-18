"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Area = void 0;
const mongoose = require("mongoose");
exports.Area = new mongoose.Schema({
    serviceDeliveryInstitution: { type: mongoose.Types.ObjectId, ref: 'serviceDeliveryInstitutions' },
    name: { type: String },
    code: { type: String },
    areaType: { type: mongoose.Types.ObjectId, ref: 'typelists' },
    capacity: { type: Number },
    description: { type: String },
    responsible: { type: mongoose.Types.ObjectId, ref: 'medicalStaffs' },
    collaboratorsInArea: [{ type: mongoose.Types.ObjectId, ref: 'medicalStaffs' }],
    location: { type: String },
    startHour: { type: Date },
    finishHour: { type: Date },
    status: { type: mongoose.Types.ObjectId, ref: 'typelists' },
    createAt: { type: Date, default: Date.now },
    udpateAt: { type: Date }
});
//# sourceMappingURL=area.schema.js.map