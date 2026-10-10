import { Connection } from 'mongoose';
export declare const SpecialtyProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        name: string;
        description?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        name: string;
        description?: string;
    }> & {
        name: string;
        description?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        name: string;
        description?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        name: string;
        description?: string;
    }>> & import("mongoose").FlatRecord<{
        name: string;
        description?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
