import { Connection } from 'mongoose';
export declare const PatientProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        firstName: string;
        maternalSurname: string;
        paternalSurname: string;
        dateOfBirth: NativeDate;
        status: boolean;
        serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
        healthNetwork?: import("mongoose").Types.ObjectId;
        code?: string;
        address?: string;
        phone?: string;
        email?: string;
        gender?: "M" | "F" | "O";
        bloodType?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        firstName: string;
        maternalSurname: string;
        paternalSurname: string;
        dateOfBirth: NativeDate;
        status: boolean;
        serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
        healthNetwork?: import("mongoose").Types.ObjectId;
        code?: string;
        address?: string;
        phone?: string;
        email?: string;
        gender?: "M" | "F" | "O";
        bloodType?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    }> & {
        firstName: string;
        maternalSurname: string;
        paternalSurname: string;
        dateOfBirth: NativeDate;
        status: boolean;
        serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
        healthNetwork?: import("mongoose").Types.ObjectId;
        code?: string;
        address?: string;
        phone?: string;
        email?: string;
        gender?: "M" | "F" | "O";
        bloodType?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        firstName: string;
        maternalSurname: string;
        paternalSurname: string;
        dateOfBirth: NativeDate;
        status: boolean;
        serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
        healthNetwork?: import("mongoose").Types.ObjectId;
        code?: string;
        address?: string;
        phone?: string;
        email?: string;
        gender?: "M" | "F" | "O";
        bloodType?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        firstName: string;
        maternalSurname: string;
        paternalSurname: string;
        dateOfBirth: NativeDate;
        status: boolean;
        serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
        healthNetwork?: import("mongoose").Types.ObjectId;
        code?: string;
        address?: string;
        phone?: string;
        email?: string;
        gender?: "M" | "F" | "O";
        bloodType?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    }>> & import("mongoose").FlatRecord<{
        firstName: string;
        maternalSurname: string;
        paternalSurname: string;
        dateOfBirth: NativeDate;
        status: boolean;
        serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
        healthNetwork?: import("mongoose").Types.ObjectId;
        code?: string;
        address?: string;
        phone?: string;
        email?: string;
        gender?: "M" | "F" | "O";
        bloodType?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
