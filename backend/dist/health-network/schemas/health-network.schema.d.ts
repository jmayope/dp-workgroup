import * as mongoose from 'mongoose';
export declare const HealthNetwork: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    status: boolean;
    description?: string;
    abbr?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    status: boolean;
    description?: string;
    abbr?: string;
}>> & mongoose.FlatRecord<{
    name: string;
    status: boolean;
    description?: string;
    abbr?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
