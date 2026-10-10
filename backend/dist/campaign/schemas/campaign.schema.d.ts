import * as mongoose from "mongoose";
export declare const Campaign: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    status: boolean;
    createAt: NativeDate;
    usageExternalForm: boolean;
    resources: any[];
    personal: any[];
    serviceDeliveryInstitution?: mongoose.Types.ObjectId;
    name?: string;
    startDate?: NativeDate;
    finishDate?: NativeDate;
    campaignType?: mongoose.Types.ObjectId;
    campaignStatus?: mongoose.Types.ObjectId;
    urlExternalForm?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    status: boolean;
    createAt: NativeDate;
    usageExternalForm: boolean;
    resources: any[];
    personal: any[];
    serviceDeliveryInstitution?: mongoose.Types.ObjectId;
    name?: string;
    startDate?: NativeDate;
    finishDate?: NativeDate;
    campaignType?: mongoose.Types.ObjectId;
    campaignStatus?: mongoose.Types.ObjectId;
    urlExternalForm?: string;
}>> & mongoose.FlatRecord<{
    status: boolean;
    createAt: NativeDate;
    usageExternalForm: boolean;
    resources: any[];
    personal: any[];
    serviceDeliveryInstitution?: mongoose.Types.ObjectId;
    name?: string;
    startDate?: NativeDate;
    finishDate?: NativeDate;
    campaignType?: mongoose.Types.ObjectId;
    campaignStatus?: mongoose.Types.ObjectId;
    urlExternalForm?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
