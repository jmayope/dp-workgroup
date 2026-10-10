import * as mongoose from 'mongoose';
export declare const SpecialtyControl: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    status?: boolean;
    description?: string;
    specialty?: mongoose.Types.ObjectId;
    growthStage?: mongoose.Types.ObjectId;
    order?: number;
    tag?: string;
    minimumRange?: number;
    maximumRange?: number;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    status?: boolean;
    description?: string;
    specialty?: mongoose.Types.ObjectId;
    growthStage?: mongoose.Types.ObjectId;
    order?: number;
    tag?: string;
    minimumRange?: number;
    maximumRange?: number;
}>> & mongoose.FlatRecord<{
    name: string;
    status?: boolean;
    description?: string;
    specialty?: mongoose.Types.ObjectId;
    growthStage?: mongoose.Types.ObjectId;
    order?: number;
    tag?: string;
    minimumRange?: number;
    maximumRange?: number;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
