import * as mongoose from "mongoose";
export declare const CampaignMovement: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    status: boolean;
    createAt: NativeDate;
    obs?: string;
    campaign?: mongoose.Types.ObjectId;
    personal?: any;
    resource?: any;
    movementStatus?: mongoose.Types.ObjectId;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    status: boolean;
    createAt: NativeDate;
    obs?: string;
    campaign?: mongoose.Types.ObjectId;
    personal?: any;
    resource?: any;
    movementStatus?: mongoose.Types.ObjectId;
}>> & mongoose.FlatRecord<{
    status: boolean;
    createAt: NativeDate;
    obs?: string;
    campaign?: mongoose.Types.ObjectId;
    personal?: any;
    resource?: any;
    movementStatus?: mongoose.Types.ObjectId;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
