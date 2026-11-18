import { Connection } from 'mongoose';
export declare const AnthropometricMeasurementProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        name: string;
        status: boolean;
        description?: string;
        category?: string;
        measurementUnit?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        name: string;
        status: boolean;
        description?: string;
        category?: string;
        measurementUnit?: string;
    }> & {
        name: string;
        status: boolean;
        description?: string;
        category?: string;
        measurementUnit?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        name: string;
        status: boolean;
        description?: string;
        category?: string;
        measurementUnit?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        name: string;
        status: boolean;
        description?: string;
        category?: string;
        measurementUnit?: string;
    }>> & import("mongoose").FlatRecord<{
        name: string;
        status: boolean;
        description?: string;
        category?: string;
        measurementUnit?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
