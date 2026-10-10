import * as mongoose from 'mongoose';
export declare const TypeList: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    code: string;
    type: string;
    status: boolean;
    name?: string;
    description?: string;
    valueToCalculate?: number;
    additionalFields?: any;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    code: string;
    type: string;
    status: boolean;
    name?: string;
    description?: string;
    valueToCalculate?: number;
    additionalFields?: any;
}>> & mongoose.FlatRecord<{
    code: string;
    type: string;
    status: boolean;
    name?: string;
    description?: string;
    valueToCalculate?: number;
    additionalFields?: any;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
