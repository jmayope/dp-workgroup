import * as mongoose from 'mongoose';
export declare const Menu: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    status: boolean;
    parent?: mongoose.Types.ObjectId;
    identifier?: string;
    icon?: string;
    url?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name: string;
    status: boolean;
    parent?: mongoose.Types.ObjectId;
    identifier?: string;
    icon?: string;
    url?: string;
}>> & mongoose.FlatRecord<{
    name: string;
    status: boolean;
    parent?: mongoose.Types.ObjectId;
    identifier?: string;
    icon?: string;
    url?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
