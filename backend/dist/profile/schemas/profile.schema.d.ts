import * as mongoose from 'mongoose';
export declare const Profile: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    status: boolean;
    description?: string;
    specialty?: mongoose.Types.ObjectId;
    shortName?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    status: boolean;
    description?: string;
    specialty?: mongoose.Types.ObjectId;
    shortName?: string;
}>> & mongoose.FlatRecord<{
    name: string;
    status: boolean;
    description?: string;
    specialty?: mongoose.Types.ObjectId;
    shortName?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
