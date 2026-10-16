import { Connection } from 'mongoose';
export declare const KardexMasterProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        product: import("mongoose").Types.ObjectId;
        createAt: NativeDate;
        updateAt: NativeDate;
        serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
        availableStock?: number;
        createBy?: import("mongoose").Types.ObjectId;
        updateBy?: import("mongoose").Types.ObjectId;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        product: import("mongoose").Types.ObjectId;
        createAt: NativeDate;
        updateAt: NativeDate;
        serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
        availableStock?: number;
        createBy?: import("mongoose").Types.ObjectId;
        updateBy?: import("mongoose").Types.ObjectId;
    }> & {
        product: import("mongoose").Types.ObjectId;
        createAt: NativeDate;
        updateAt: NativeDate;
        serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
        availableStock?: number;
        createBy?: import("mongoose").Types.ObjectId;
        updateBy?: import("mongoose").Types.ObjectId;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        product: import("mongoose").Types.ObjectId;
        createAt: NativeDate;
        updateAt: NativeDate;
        serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
        availableStock?: number;
        createBy?: import("mongoose").Types.ObjectId;
        updateBy?: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        product: import("mongoose").Types.ObjectId;
        createAt: NativeDate;
        updateAt: NativeDate;
        serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
        availableStock?: number;
        createBy?: import("mongoose").Types.ObjectId;
        updateBy?: import("mongoose").Types.ObjectId;
    }>> & import("mongoose").FlatRecord<{
        product: import("mongoose").Types.ObjectId;
        createAt: NativeDate;
        updateAt: NativeDate;
        serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
        availableStock?: number;
        createBy?: import("mongoose").Types.ObjectId;
        updateBy?: import("mongoose").Types.ObjectId;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
