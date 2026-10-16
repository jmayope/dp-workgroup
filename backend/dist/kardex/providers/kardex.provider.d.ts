import { Connection } from 'mongoose';
export declare const KardexProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        product: import("mongoose").Types.ObjectId;
        inputType: import("mongoose").Types.ObjectId;
        createAt: NativeDate;
        kardexMaster?: import("mongoose").Types.ObjectId;
        previousQuantity?: number;
        quantity?: number;
        nextQuantity?: number;
        reason?: string;
        assignedTo?: import("mongoose").Types.ObjectId;
        status?: import("mongoose").Types.ObjectId;
        createBy?: import("mongoose").Types.ObjectId;
        updateAt?: NativeDate;
        updateBy?: import("mongoose").Types.ObjectId;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        product: import("mongoose").Types.ObjectId;
        inputType: import("mongoose").Types.ObjectId;
        createAt: NativeDate;
        kardexMaster?: import("mongoose").Types.ObjectId;
        previousQuantity?: number;
        quantity?: number;
        nextQuantity?: number;
        reason?: string;
        assignedTo?: import("mongoose").Types.ObjectId;
        status?: import("mongoose").Types.ObjectId;
        createBy?: import("mongoose").Types.ObjectId;
        updateAt?: NativeDate;
        updateBy?: import("mongoose").Types.ObjectId;
    }> & {
        product: import("mongoose").Types.ObjectId;
        inputType: import("mongoose").Types.ObjectId;
        createAt: NativeDate;
        kardexMaster?: import("mongoose").Types.ObjectId;
        previousQuantity?: number;
        quantity?: number;
        nextQuantity?: number;
        reason?: string;
        assignedTo?: import("mongoose").Types.ObjectId;
        status?: import("mongoose").Types.ObjectId;
        createBy?: import("mongoose").Types.ObjectId;
        updateAt?: NativeDate;
        updateBy?: import("mongoose").Types.ObjectId;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        product: import("mongoose").Types.ObjectId;
        inputType: import("mongoose").Types.ObjectId;
        createAt: NativeDate;
        kardexMaster?: import("mongoose").Types.ObjectId;
        previousQuantity?: number;
        quantity?: number;
        nextQuantity?: number;
        reason?: string;
        assignedTo?: import("mongoose").Types.ObjectId;
        status?: import("mongoose").Types.ObjectId;
        createBy?: import("mongoose").Types.ObjectId;
        updateAt?: NativeDate;
        updateBy?: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        product: import("mongoose").Types.ObjectId;
        inputType: import("mongoose").Types.ObjectId;
        createAt: NativeDate;
        kardexMaster?: import("mongoose").Types.ObjectId;
        previousQuantity?: number;
        quantity?: number;
        nextQuantity?: number;
        reason?: string;
        assignedTo?: import("mongoose").Types.ObjectId;
        status?: import("mongoose").Types.ObjectId;
        createBy?: import("mongoose").Types.ObjectId;
        updateAt?: NativeDate;
        updateBy?: import("mongoose").Types.ObjectId;
    }>> & import("mongoose").FlatRecord<{
        product: import("mongoose").Types.ObjectId;
        inputType: import("mongoose").Types.ObjectId;
        createAt: NativeDate;
        kardexMaster?: import("mongoose").Types.ObjectId;
        previousQuantity?: number;
        quantity?: number;
        nextQuantity?: number;
        reason?: string;
        assignedTo?: import("mongoose").Types.ObjectId;
        status?: import("mongoose").Types.ObjectId;
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
