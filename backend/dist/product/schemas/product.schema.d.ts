import * as mongoose from 'mongoose';
export declare const Product: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    status: boolean;
    createAt: NativeDate;
    category: mongoose.Types.ObjectId;
    code?: string;
    name?: string;
    description?: string;
    measurementUnit?: mongoose.Types.ObjectId;
    createBy?: mongoose.Types.ObjectId;
    updateAt?: NativeDate;
    updateBy?: mongoose.Types.ObjectId;
    provider?: string;
    minimumStock?: number;
    location?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    status: boolean;
    createAt: NativeDate;
    category: mongoose.Types.ObjectId;
    code?: string;
    name?: string;
    description?: string;
    measurementUnit?: mongoose.Types.ObjectId;
    createBy?: mongoose.Types.ObjectId;
    updateAt?: NativeDate;
    updateBy?: mongoose.Types.ObjectId;
    provider?: string;
    minimumStock?: number;
    location?: string;
}>> & mongoose.FlatRecord<{
    status: boolean;
    createAt: NativeDate;
    category: mongoose.Types.ObjectId;
    code?: string;
    name?: string;
    description?: string;
    measurementUnit?: mongoose.Types.ObjectId;
    createBy?: mongoose.Types.ObjectId;
    updateAt?: NativeDate;
    updateBy?: mongoose.Types.ObjectId;
    provider?: string;
    minimumStock?: number;
    location?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
