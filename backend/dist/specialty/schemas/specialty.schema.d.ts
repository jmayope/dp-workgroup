import * as mongoose from 'mongoose';
export declare const Specialty: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    description?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    description?: string;
}>> & mongoose.FlatRecord<{
    name: string;
    description?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
