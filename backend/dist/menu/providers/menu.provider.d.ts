import { Connection } from 'mongoose';
export declare const MenuProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        name: string;
        status: boolean;
        parent?: import("mongoose").Types.ObjectId;
        identifier?: string;
        icon?: string;
        url?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        name: string;
        status: boolean;
        parent?: import("mongoose").Types.ObjectId;
        identifier?: string;
        icon?: string;
        url?: string;
    }> & {
        name: string;
        status: boolean;
        parent?: import("mongoose").Types.ObjectId;
        identifier?: string;
        icon?: string;
        url?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        name: string;
        status: boolean;
        parent?: import("mongoose").Types.ObjectId;
        identifier?: string;
        icon?: string;
        url?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        name: string;
        status: boolean;
        parent?: import("mongoose").Types.ObjectId;
        identifier?: string;
        icon?: string;
        url?: string;
    }>> & import("mongoose").FlatRecord<{
        name: string;
        status: boolean;
        parent?: import("mongoose").Types.ObjectId;
        identifier?: string;
        icon?: string;
        url?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
