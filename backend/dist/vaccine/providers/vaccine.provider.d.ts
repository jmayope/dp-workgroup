import { Connection } from 'mongoose';
export declare const VaccineProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        createdAt: NativeDate;
        status: boolean;
        code?: string;
        updatedAt?: NativeDate;
        name?: string;
        description?: string;
        createdBy?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
        updatedBy?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        createdAt: NativeDate;
        status: boolean;
        code?: string;
        updatedAt?: NativeDate;
        name?: string;
        description?: string;
        createdBy?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
        updatedBy?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
    }> & {
        createdAt: NativeDate;
        status: boolean;
        code?: string;
        updatedAt?: NativeDate;
        name?: string;
        description?: string;
        createdBy?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
        updatedBy?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        createdAt: NativeDate;
        status: boolean;
        code?: string;
        updatedAt?: NativeDate;
        name?: string;
        description?: string;
        createdBy?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
        updatedBy?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        status: boolean;
        code?: string;
        updatedAt?: NativeDate;
        name?: string;
        description?: string;
        createdBy?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
        updatedBy?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
    }>> & import("mongoose").FlatRecord<{
        createdAt: NativeDate;
        status: boolean;
        code?: string;
        updatedAt?: NativeDate;
        name?: string;
        description?: string;
        createdBy?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
        updatedBy?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
