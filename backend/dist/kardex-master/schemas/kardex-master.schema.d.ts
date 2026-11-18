import * as mongoose from 'mongoose';
export declare const KardexMaster: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createAt: NativeDate;
    product: mongoose.Types.ObjectId;
    updateAt: NativeDate;
    serviceDeliveryInstitution?: mongoose.Types.ObjectId;
    availableStock?: number;
    createBy?: mongoose.Types.ObjectId;
    updateBy?: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createAt: NativeDate;
    product: mongoose.Types.ObjectId;
    updateAt: NativeDate;
    serviceDeliveryInstitution?: mongoose.Types.ObjectId;
    availableStock?: number;
    createBy?: mongoose.Types.ObjectId;
    updateBy?: mongoose.Types.ObjectId;
}>> & mongoose.FlatRecord<{
    createAt: NativeDate;
    product: mongoose.Types.ObjectId;
    updateAt: NativeDate;
    serviceDeliveryInstitution?: mongoose.Types.ObjectId;
    availableStock?: number;
    createBy?: mongoose.Types.ObjectId;
    updateBy?: mongoose.Types.ObjectId;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
