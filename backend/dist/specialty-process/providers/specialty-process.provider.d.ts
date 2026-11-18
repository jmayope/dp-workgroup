import { Connection } from 'mongoose';
export declare const SpecialtyProcessProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        name: string;
        description?: string;
        specialty?: import("mongoose").Types.ObjectId;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        name: string;
        description?: string;
        specialty?: import("mongoose").Types.ObjectId;
    }> & {
        name: string;
        description?: string;
        specialty?: import("mongoose").Types.ObjectId;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        name: string;
        description?: string;
        specialty?: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        name: string;
        description?: string;
        specialty?: import("mongoose").Types.ObjectId;
    }>> & import("mongoose").FlatRecord<{
        name: string;
        description?: string;
        specialty?: import("mongoose").Types.ObjectId;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
