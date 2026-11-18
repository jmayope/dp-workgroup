import { Connection } from 'mongoose';
export declare const SpecialtyControlProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        name: string;
        status?: boolean;
        description?: string;
        specialty?: import("mongoose").Types.ObjectId;
        growthStage?: import("mongoose").Types.ObjectId;
        order?: number;
        tag?: string;
        minimumRange?: number;
        maximumRange?: number;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        name: string;
        status?: boolean;
        description?: string;
        specialty?: import("mongoose").Types.ObjectId;
        growthStage?: import("mongoose").Types.ObjectId;
        order?: number;
        tag?: string;
        minimumRange?: number;
        maximumRange?: number;
    }> & {
        name: string;
        status?: boolean;
        description?: string;
        specialty?: import("mongoose").Types.ObjectId;
        growthStage?: import("mongoose").Types.ObjectId;
        order?: number;
        tag?: string;
        minimumRange?: number;
        maximumRange?: number;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        name: string;
        status?: boolean;
        description?: string;
        specialty?: import("mongoose").Types.ObjectId;
        growthStage?: import("mongoose").Types.ObjectId;
        order?: number;
        tag?: string;
        minimumRange?: number;
        maximumRange?: number;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        name: string;
        status?: boolean;
        description?: string;
        specialty?: import("mongoose").Types.ObjectId;
        growthStage?: import("mongoose").Types.ObjectId;
        order?: number;
        tag?: string;
        minimumRange?: number;
        maximumRange?: number;
    }>> & import("mongoose").FlatRecord<{
        name: string;
        status?: boolean;
        description?: string;
        specialty?: import("mongoose").Types.ObjectId;
        growthStage?: import("mongoose").Types.ObjectId;
        order?: number;
        tag?: string;
        minimumRange?: number;
        maximumRange?: number;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
