import * as mongoose from 'mongoose';
export declare const Kardex: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    product: mongoose.Types.ObjectId;
    inputType: mongoose.Types.ObjectId;
    createAt: NativeDate;
    kardexMaster?: mongoose.Types.ObjectId;
    previousQuantity?: number;
    quantity?: number;
    nextQuantity?: number;
    reason?: string;
    assignedTo?: mongoose.Types.ObjectId;
    status?: mongoose.Types.ObjectId;
    createBy?: mongoose.Types.ObjectId;
    updateAt?: NativeDate;
    updateBy?: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    product: mongoose.Types.ObjectId;
    inputType: mongoose.Types.ObjectId;
    createAt: NativeDate;
    kardexMaster?: mongoose.Types.ObjectId;
    previousQuantity?: number;
    quantity?: number;
    nextQuantity?: number;
    reason?: string;
    assignedTo?: mongoose.Types.ObjectId;
    status?: mongoose.Types.ObjectId;
    createBy?: mongoose.Types.ObjectId;
    updateAt?: NativeDate;
    updateBy?: mongoose.Types.ObjectId;
}>> & mongoose.FlatRecord<{
    product: mongoose.Types.ObjectId;
    inputType: mongoose.Types.ObjectId;
    createAt: NativeDate;
    kardexMaster?: mongoose.Types.ObjectId;
    previousQuantity?: number;
    quantity?: number;
    nextQuantity?: number;
    reason?: string;
    assignedTo?: mongoose.Types.ObjectId;
    status?: mongoose.Types.ObjectId;
    createBy?: mongoose.Types.ObjectId;
    updateAt?: NativeDate;
    updateBy?: mongoose.Types.ObjectId;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
