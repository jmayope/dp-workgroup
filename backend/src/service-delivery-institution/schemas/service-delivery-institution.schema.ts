import * as mongoose from 'mongoose';

export const ServiceDeliveryInstitution = new mongoose.Schema({
    name: { type: String, required: true },
    code: { type: String, },
    typeInstitution: { type: mongoose.Schema.ObjectId, ref: "typelists"},
    category: { type: mongoose.Schema.ObjectId, ref: "typelists" },
    ruc: { type: String },
    establishmentManagers: [],
    description: { type: String },
    openAllDay: { type: Boolean, default: false },
    openingHours: [],
    address: { type: String },
    reference: { type: String },
    department: { type: String },
    province: { type: String },
    district: { type: String },
    ubigeo: { type: String },
    phone: { type: String },
    cellphone: { type: String },
    email: {type: String },
    website: { type: String },
    logo: { type: String },
    availableServices: [],
    status: { type: Boolean, default: true }
})