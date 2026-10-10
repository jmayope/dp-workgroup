import * as mongoose from 'mongoose';
export declare const MedicalHistory: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    patient: mongoose.Types.ObjectId;
    status: boolean;
    creationDate: NativeDate;
    details: any[];
    code?: string;
    observation?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    patient: mongoose.Types.ObjectId;
    status: boolean;
    creationDate: NativeDate;
    details: any[];
    code?: string;
    observation?: string;
}>> & mongoose.FlatRecord<{
    patient: mongoose.Types.ObjectId;
    status: boolean;
    creationDate: NativeDate;
    details: any[];
    code?: string;
    observation?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
