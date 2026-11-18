import * as mongoose from 'mongoose';
export declare const PatientMeasurement: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    status: boolean;
    createAt: NativeDate;
    values?: any;
    growthStage?: mongoose.Types.ObjectId;
    anthropometricMeasurement?: mongoose.Types.ObjectId;
    obs?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    status: boolean;
    createAt: NativeDate;
    values?: any;
    growthStage?: mongoose.Types.ObjectId;
    anthropometricMeasurement?: mongoose.Types.ObjectId;
    obs?: string;
}>> & mongoose.FlatRecord<{
    status: boolean;
    createAt: NativeDate;
    values?: any;
    growthStage?: mongoose.Types.ObjectId;
    anthropometricMeasurement?: mongoose.Types.ObjectId;
    obs?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
