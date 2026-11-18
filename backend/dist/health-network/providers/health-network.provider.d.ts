import { Connection } from 'mongoose';
export declare const HealthNetworkProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        name: string;
        status: boolean;
        description?: string;
        abbr?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        name: string;
        status: boolean;
        description?: string;
        abbr?: string;
    }> & {
        name: string;
        status: boolean;
        description?: string;
        abbr?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        name: string;
        status: boolean;
        description?: string;
        abbr?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        name: string;
        status: boolean;
        description?: string;
        abbr?: string;
    }>> & import("mongoose").FlatRecord<{
        name: string;
        status: boolean;
        description?: string;
        abbr?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
