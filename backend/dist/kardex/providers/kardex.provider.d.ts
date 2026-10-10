import { Connection } from 'mongoose';
export declare const KardexProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        createAt: NativeDate;
        product: import("mongoose").Types.ObjectId;
        inputType: import("mongoose").Types.ObjectId;
        quantity?: number;
        status?: import("mongoose").Types.ObjectId;
        reason?: string;
        assignedTo?: import("mongoose").Types.ObjectId;
        previousQuantity?: number;
        nextQuantity?: number;
        createBy?: import("mongoose").Types.ObjectId;
        updateAt?: NativeDate;
        updateBy?: import("mongoose").Types.ObjectId;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        createAt: NativeDate;
        product: import("mongoose").Types.ObjectId;
        inputType: import("mongoose").Types.ObjectId;
        quantity?: number;
        status?: import("mongoose").Types.ObjectId;
        reason?: string;
        assignedTo?: import("mongoose").Types.ObjectId;
        previousQuantity?: number;
        nextQuantity?: number;
        createBy?: import("mongoose").Types.ObjectId;
        updateAt?: NativeDate;
        updateBy?: import("mongoose").Types.ObjectId;
    }> & {
        createAt: NativeDate;
        product: import("mongoose").Types.ObjectId;
        inputType: import("mongoose").Types.ObjectId;
        quantity?: number;
        status?: import("mongoose").Types.ObjectId;
        reason?: string;
        assignedTo?: import("mongoose").Types.ObjectId;
        previousQuantity?: number;
        nextQuantity?: number;
        createBy?: import("mongoose").Types.ObjectId;
        updateAt?: NativeDate;
        updateBy?: import("mongoose").Types.ObjectId;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        createAt: NativeDate;
        product: import("mongoose").Types.ObjectId;
        inputType: import("mongoose").Types.ObjectId;
        quantity?: number;
        status?: import("mongoose").Types.ObjectId;
        reason?: string;
        assignedTo?: import("mongoose").Types.ObjectId;
        previousQuantity?: number;
        nextQuantity?: number;
        createBy?: import("mongoose").Types.ObjectId;
        updateAt?: NativeDate;
        updateBy?: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        createAt: NativeDate;
        product: import("mongoose").Types.ObjectId;
        inputType: import("mongoose").Types.ObjectId;
        quantity?: number;
        status?: import("mongoose").Types.ObjectId;
        reason?: string;
        assignedTo?: import("mongoose").Types.ObjectId;
        previousQuantity?: number;
        nextQuantity?: number;
        createBy?: import("mongoose").Types.ObjectId;
        updateAt?: NativeDate;
        updateBy?: import("mongoose").Types.ObjectId;
    }>> & import("mongoose").FlatRecord<{
        createAt: NativeDate;
        product: import("mongoose").Types.ObjectId;
        inputType: import("mongoose").Types.ObjectId;
        quantity?: number;
        status?: import("mongoose").Types.ObjectId;
        reason?: string;
        assignedTo?: import("mongoose").Types.ObjectId;
        previousQuantity?: number;
        nextQuantity?: number;
        createBy?: import("mongoose").Types.ObjectId;
        updateAt?: NativeDate;
        updateBy?: import("mongoose").Types.ObjectId;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
