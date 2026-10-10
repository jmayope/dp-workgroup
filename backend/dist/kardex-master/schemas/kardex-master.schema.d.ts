import * as mongoose from 'mongoose';
export declare const KardexMaster: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    product: mongoose.Types.ObjectId;
    updateAt: NativeDate;
    availableStock?: number;
    updateBy?: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    product: mongoose.Types.ObjectId;
    updateAt: NativeDate;
    availableStock?: number;
    updateBy?: mongoose.Types.ObjectId;
}>> & mongoose.FlatRecord<{
    product: mongoose.Types.ObjectId;
    updateAt: NativeDate;
    availableStock?: number;
    updateBy?: mongoose.Types.ObjectId;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
