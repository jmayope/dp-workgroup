import * as mongoose from 'mongoose';
export declare const ProfileMenu: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    profile?: mongoose.Types.ObjectId;
    menu?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    profile?: mongoose.Types.ObjectId;
    menu?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
}>> & mongoose.FlatRecord<{
    profile?: mongoose.Types.ObjectId;
    menu?: {
        prototype?: mongoose.Types.ObjectId;
        cacheHexString?: unknown;
        generate?: {};
        createFromTime?: {};
        createFromHexString?: {};
        createFromBase64?: {};
        isValid?: {};
    };
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
