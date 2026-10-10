"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicalStaff = void 0;
const mongoose = require("mongoose");
exports.MedicalStaff = new mongoose.Schema({
    code: { type: String, },
    documentType: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String },
    password: { type: String },
    changedPassword: { type: Boolean, default: false },
    profession: { type: String },
    healthEstablisments: [
        {
            serviceDeliveryInstitution: { type: mongoose.Schema.ObjectId, ref: 'serviceDeliveryInstitutions' },
            startDate: { type: Date, default: Date.now },
            finishDate: { type: Date },
            createAt: { type: Date, default: Date.now }
        }
    ],
    workingCondition: { type: String },
    ups: { type: String },
    status: { type: Boolean, default: true },
    profiles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'profiles' }],
    phone: { type: String },
    email: { type: String },
});
//# sourceMappingURL=medical-staff.schema.js.map