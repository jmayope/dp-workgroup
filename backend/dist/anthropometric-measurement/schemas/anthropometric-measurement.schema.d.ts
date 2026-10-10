import * as mongoose from 'mongoose';
export declare const AnthropometricMeasurement: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    status: boolean;
    description?: string;
    category?: string;
    measurementUnit?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    status: boolean;
    description?: string;
    category?: string;
    measurementUnit?: string;
}>> & mongoose.FlatRecord<{
    name: string;
    status: boolean;
    description?: string;
    category?: string;
    measurementUnit?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
