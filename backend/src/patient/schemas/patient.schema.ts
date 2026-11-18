import * as mongoose from 'mongoose';

export const Patient = new mongoose.Schema({
    code: {type: String },
    firstName: { type: String, required: true },
    paternalSurname: { type: String, required: true },
    maternalSurname: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    address: { type: String },
    phone: { type: String },
    email: { type: String },
    healthNetwork: { type: mongoose.Schema.Types.ObjectId, ref: 'healthNetworks' },
    serviceDeliveryInstitution: { type: mongoose.Schema.Types.ObjectId, ref: 'serviceDeliveryInstitutions'},
    gender: { type: String, enum: ['M', 'F', 'O'] },
    bloodType: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],},
    status: { type: Boolean, default: true }
});

Patient.index({code: 'text', firstName: 'text', paternalSurname: 'text', maternalSurname: 'text'})