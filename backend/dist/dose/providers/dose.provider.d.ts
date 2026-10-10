import { Connection } from 'mongoose';
export declare const DoseProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        status: boolean;
        createAt: NativeDate;
        number?: number;
        name?: string;
        description?: string;
        growthStage?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
        vaccine?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        status: boolean;
        createAt: NativeDate;
        number?: number;
        name?: string;
        description?: string;
        growthStage?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
        vaccine?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
    }> & {
        status: boolean;
        createAt: NativeDate;
        number?: number;
        name?: string;
        description?: string;
        growthStage?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
        vaccine?: {
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
        status: boolean;
        createAt: NativeDate;
        number?: number;
        name?: string;
        description?: string;
        growthStage?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
        vaccine?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        status: boolean;
        createAt: NativeDate;
        number?: number;
        name?: string;
        description?: string;
        growthStage?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
        vaccine?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
    }>> & import("mongoose").FlatRecord<{
        status: boolean;
        createAt: NativeDate;
        number?: number;
        name?: string;
        description?: string;
        growthStage?: {
            prototype?: import("mongoose").Types.ObjectId;
            cacheHexString?: unknown;
            generate?: {};
            createFromTime?: {};
            createFromHexString?: {};
            createFromBase64?: {};
            isValid?: {};
        };
        vaccine?: {
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
