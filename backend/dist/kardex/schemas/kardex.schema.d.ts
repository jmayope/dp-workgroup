import * as mongoose from 'mongoose';
export declare const Kardex: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createAt: NativeDate;
    product: mongoose.Types.ObjectId;
    inputType: mongoose.Types.ObjectId;
    quantity?: number;
    status?: mongoose.Types.ObjectId;
    reason?: string;
    assignedTo?: mongoose.Types.ObjectId;
    previousQuantity?: number;
    nextQuantity?: number;
    createBy?: mongoose.Types.ObjectId;
    updateAt?: NativeDate;
    updateBy?: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createAt: NativeDate;
    product: mongoose.Types.ObjectId;
    inputType: mongoose.Types.ObjectId;
    quantity?: number;
    status?: mongoose.Types.ObjectId;
    reason?: string;
    assignedTo?: mongoose.Types.ObjectId;
    previousQuantity?: number;
    nextQuantity?: number;
    createBy?: mongoose.Types.ObjectId;
    updateAt?: NativeDate;
    updateBy?: mongoose.Types.ObjectId;
}>> & mongoose.FlatRecord<{
    createAt: NativeDate;
    product: mongoose.Types.ObjectId;
    inputType: mongoose.Types.ObjectId;
    quantity?: number;
    status?: mongoose.Types.ObjectId;
    reason?: string;
    assignedTo?: mongoose.Types.ObjectId;
    previousQuantity?: number;
    nextQuantity?: number;
    createBy?: mongoose.Types.ObjectId;
    updateAt?: NativeDate;
    updateBy?: mongoose.Types.ObjectId;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
