import * as mongoose from 'mongoose';
export declare const SpecialtyProcess: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    description?: string;
    specialty?: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    description?: string;
    specialty?: mongoose.Types.ObjectId;
}>> & mongoose.FlatRecord<{
    name: string;
    description?: string;
    specialty?: mongoose.Types.ObjectId;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
