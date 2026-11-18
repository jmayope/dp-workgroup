import * as mongoose from 'mongoose';
export declare const GrowthStage: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    status: boolean;
    vaccines: mongoose.Types.ObjectId[];
    description?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    status: boolean;
    vaccines: mongoose.Types.ObjectId[];
    description?: string;
}>> & mongoose.FlatRecord<{
    name: string;
    status: boolean;
    vaccines: mongoose.Types.ObjectId[];
    description?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
