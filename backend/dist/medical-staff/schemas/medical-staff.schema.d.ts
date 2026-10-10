import * as mongoose from 'mongoose';
export declare const MedicalStaff: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    firstName: string;
    status: boolean;
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
    profiles: mongoose.Types.ObjectId[];
    code?: string;
    phone?: string;
    email?: string;
    username?: string;
    password?: string;
    profession?: string;
    workingCondition?: string;
    ups?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    firstName: string;
    status: boolean;
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
    profiles: mongoose.Types.ObjectId[];
    code?: string;
    phone?: string;
    email?: string;
    username?: string;
    password?: string;
    profession?: string;
    workingCondition?: string;
    ups?: string;
}>> & mongoose.FlatRecord<{
    firstName: string;
    status: boolean;
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
    profiles: mongoose.Types.ObjectId[];
    code?: string;
    phone?: string;
    email?: string;
    username?: string;
    password?: string;
    profession?: string;
    workingCondition?: string;
    ups?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
