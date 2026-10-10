import { Connection } from 'mongoose';
export declare const ProductProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        status: boolean;
        createAt: NativeDate;
        category: import("mongoose").Types.ObjectId;
        code?: string;
        name?: string;
        description?: string;
        measurementUnit?: import("mongoose").Types.ObjectId;
        createBy?: import("mongoose").Types.ObjectId;
        updateAt?: NativeDate;
        updateBy?: import("mongoose").Types.ObjectId;
        provider?: string;
        minimumStock?: number;
        location?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        status: boolean;
        createAt: NativeDate;
        category: import("mongoose").Types.ObjectId;
        code?: string;
        name?: string;
        description?: string;
        measurementUnit?: import("mongoose").Types.ObjectId;
        createBy?: import("mongoose").Types.ObjectId;
        updateAt?: NativeDate;
        updateBy?: import("mongoose").Types.ObjectId;
        provider?: string;
        minimumStock?: number;
        location?: string;
    }> & {
        status: boolean;
        createAt: NativeDate;
        category: import("mongoose").Types.ObjectId;
        code?: string;
        name?: string;
        description?: string;
        measurementUnit?: import("mongoose").Types.ObjectId;
        createBy?: import("mongoose").Types.ObjectId;
        updateAt?: NativeDate;
        updateBy?: import("mongoose").Types.ObjectId;
        provider?: string;
        minimumStock?: number;
        location?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        status: boolean;
        createAt: NativeDate;
        category: import("mongoose").Types.ObjectId;
        code?: string;
        name?: string;
        description?: string;
        measurementUnit?: import("mongoose").Types.ObjectId;
        createBy?: import("mongoose").Types.ObjectId;
        updateAt?: NativeDate;
        updateBy?: import("mongoose").Types.ObjectId;
        provider?: string;
        minimumStock?: number;
        location?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        status: boolean;
        createAt: NativeDate;
        category: import("mongoose").Types.ObjectId;
        code?: string;
        name?: string;
        description?: string;
        measurementUnit?: import("mongoose").Types.ObjectId;
        createBy?: import("mongoose").Types.ObjectId;
        updateAt?: NativeDate;
        updateBy?: import("mongoose").Types.ObjectId;
        provider?: string;
        minimumStock?: number;
        location?: string;
    }>> & import("mongoose").FlatRecord<{
        status: boolean;
        createAt: NativeDate;
        category: import("mongoose").Types.ObjectId;
        code?: string;
        name?: string;
        description?: string;
        measurementUnit?: import("mongoose").Types.ObjectId;
        createBy?: import("mongoose").Types.ObjectId;
        updateAt?: NativeDate;
        updateBy?: import("mongoose").Types.ObjectId;
        provider?: string;
        minimumStock?: number;
        location?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
