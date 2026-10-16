import * as mongoose from 'mongoose';
export declare const MedicalStaff: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    firstName: string;
    lastName: string;
    changedPassword: boolean;
    healthEstablisments: mongoose.Types.DocumentArray<{
        startDate: NativeDate;
        createAt: NativeDate;
        serviceDeliveryInstitution?: mongoose.Types.ObjectId;
        finishDate?: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        startDate: NativeDate;
        createAt: NativeDate;
        serviceDeliveryInstitution?: mongoose.Types.ObjectId;
        finishDate?: NativeDate;
    }> & {
        startDate: NativeDate;
        createAt: NativeDate;
        serviceDeliveryInstitution?: mongoose.Types.ObjectId;
        finishDate?: NativeDate;
    }>;
    status: boolean;
    profiles: mongoose.Types.DocumentArray<{
        status: boolean;
        serviceDeliveryInstitution?: mongoose.Types.ObjectId;
        profile?: mongoose.Types.ObjectId;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        status: boolean;
        serviceDeliveryInstitution?: mongoose.Types.ObjectId;
        profile?: mongoose.Types.ObjectId;
    }> & {
        status: boolean;
        serviceDeliveryInstitution?: mongoose.Types.ObjectId;
        profile?: mongoose.Types.ObjectId;
    }>;
    code?: string;
    documentType?: string;
    username?: string;
    password?: string;
    profession?: string;
    workingCondition?: string;
    ups?: string;
    phone?: string;
    email?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    firstName: string;
    lastName: string;
    changedPassword: boolean;
    healthEstablisments: mongoose.Types.DocumentArray<{
        startDate: NativeDate;
        createAt: NativeDate;
        serviceDeliveryInstitution?: mongoose.Types.ObjectId;
        finishDate?: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        startDate: NativeDate;
        createAt: NativeDate;
        serviceDeliveryInstitution?: mongoose.Types.ObjectId;
        finishDate?: NativeDate;
    }> & {
        startDate: NativeDate;
        createAt: NativeDate;
        serviceDeliveryInstitution?: mongoose.Types.ObjectId;
        finishDate?: NativeDate;
    }>;
    status: boolean;
    profiles: mongoose.Types.DocumentArray<{
        status: boolean;
        serviceDeliveryInstitution?: mongoose.Types.ObjectId;
        profile?: mongoose.Types.ObjectId;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        status: boolean;
        serviceDeliveryInstitution?: mongoose.Types.ObjectId;
        profile?: mongoose.Types.ObjectId;
    }> & {
        status: boolean;
        serviceDeliveryInstitution?: mongoose.Types.ObjectId;
        profile?: mongoose.Types.ObjectId;
    }>;
    code?: string;
    documentType?: string;
    username?: string;
    password?: string;
    profession?: string;
    workingCondition?: string;
    ups?: string;
    phone?: string;
    email?: string;
}>> & mongoose.FlatRecord<{
    firstName: string;
    lastName: string;
    changedPassword: boolean;
    healthEstablisments: mongoose.Types.DocumentArray<{
        startDate: NativeDate;
        createAt: NativeDate;
        serviceDeliveryInstitution?: mongoose.Types.ObjectId;
        finishDate?: NativeDate;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        startDate: NativeDate;
        createAt: NativeDate;
        serviceDeliveryInstitution?: mongoose.Types.ObjectId;
        finishDate?: NativeDate;
    }> & {
        startDate: NativeDate;
        createAt: NativeDate;
        serviceDeliveryInstitution?: mongoose.Types.ObjectId;
        finishDate?: NativeDate;
    }>;
    status: boolean;
    profiles: mongoose.Types.DocumentArray<{
        status: boolean;
        serviceDeliveryInstitution?: mongoose.Types.ObjectId;
        profile?: mongoose.Types.ObjectId;
    }, mongoose.Types.Subdocument<mongoose.Types.ObjectId, any, {
        status: boolean;
        serviceDeliveryInstitution?: mongoose.Types.ObjectId;
        profile?: mongoose.Types.ObjectId;
    }> & {
        status: boolean;
        serviceDeliveryInstitution?: mongoose.Types.ObjectId;
        profile?: mongoose.Types.ObjectId;
    }>;
    code?: string;
    documentType?: string;
    username?: string;
    password?: string;
    profession?: string;
    workingCondition?: string;
    ups?: string;
    phone?: string;
    email?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
