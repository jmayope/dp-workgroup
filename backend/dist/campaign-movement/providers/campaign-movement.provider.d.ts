import { Connection } from 'mongoose';
export declare const CampaignMovementProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        status: boolean;
        createAt: NativeDate;
        obs?: string;
        campaign?: import("mongoose").Types.ObjectId;
        personal?: any;
        resource?: any;
        movementStatus?: import("mongoose").Types.ObjectId;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        status: boolean;
        createAt: NativeDate;
        obs?: string;
        campaign?: import("mongoose").Types.ObjectId;
        personal?: any;
        resource?: any;
        movementStatus?: import("mongoose").Types.ObjectId;
    }> & {
        status: boolean;
        createAt: NativeDate;
        obs?: string;
        campaign?: import("mongoose").Types.ObjectId;
        personal?: any;
        resource?: any;
        movementStatus?: import("mongoose").Types.ObjectId;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        status: boolean;
        createAt: NativeDate;
        obs?: string;
        campaign?: import("mongoose").Types.ObjectId;
        personal?: any;
        resource?: any;
        movementStatus?: import("mongoose").Types.ObjectId;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        status: boolean;
        createAt: NativeDate;
        obs?: string;
        campaign?: import("mongoose").Types.ObjectId;
        personal?: any;
        resource?: any;
        movementStatus?: import("mongoose").Types.ObjectId;
    }>> & import("mongoose").FlatRecord<{
        status: boolean;
        createAt: NativeDate;
        obs?: string;
        campaign?: import("mongoose").Types.ObjectId;
        personal?: any;
        resource?: any;
        movementStatus?: import("mongoose").Types.ObjectId;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
