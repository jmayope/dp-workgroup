import { Connection } from 'mongoose';
export declare const GrowthStageProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        name: string;
        status: boolean;
        vaccines: import("mongoose").Types.ObjectId[];
        description?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        name: string;
        status: boolean;
        vaccines: import("mongoose").Types.ObjectId[];
        description?: string;
    }> & {
        name: string;
        status: boolean;
        vaccines: import("mongoose").Types.ObjectId[];
        description?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        name: string;
        status: boolean;
        vaccines: import("mongoose").Types.ObjectId[];
        description?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        name: string;
        status: boolean;
        vaccines: import("mongoose").Types.ObjectId[];
        description?: string;
    }>> & import("mongoose").FlatRecord<{
        name: string;
        status: boolean;
        vaccines: import("mongoose").Types.ObjectId[];
        description?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
