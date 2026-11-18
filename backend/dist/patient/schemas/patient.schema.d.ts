import * as mongoose from 'mongoose';
export declare const Patient: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    firstName: string;
    maternalSurname: string;
    paternalSurname: string;
    dateOfBirth: NativeDate;
    status: boolean;
    serviceDeliveryInstitution?: mongoose.Types.ObjectId;
    healthNetwork?: mongoose.Types.ObjectId;
    code?: string;
    address?: string;
    phone?: string;
    email?: string;
    gender?: "M" | "F" | "O";
    bloodType?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    firstName: string;
    maternalSurname: string;
    paternalSurname: string;
    dateOfBirth: NativeDate;
    status: boolean;
    serviceDeliveryInstitution?: mongoose.Types.ObjectId;
    healthNetwork?: mongoose.Types.ObjectId;
    code?: string;
    address?: string;
    phone?: string;
    email?: string;
    gender?: "M" | "F" | "O";
    bloodType?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
}>> & mongoose.FlatRecord<{
    firstName: string;
    maternalSurname: string;
    paternalSurname: string;
    dateOfBirth: NativeDate;
    status: boolean;
    serviceDeliveryInstitution?: mongoose.Types.ObjectId;
    healthNetwork?: mongoose.Types.ObjectId;
    code?: string;
    address?: string;
    phone?: string;
    email?: string;
    gender?: "M" | "F" | "O";
    bloodType?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
