import { Connection } from 'mongoose';
export declare const TypeListProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        code: string;
        type: string;
        status: boolean;
        name?: string;
        description?: string;
        valueToCalculate?: number;
        additionalFields?: any;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        code: string;
        type: string;
        status: boolean;
        name?: string;
        description?: string;
        valueToCalculate?: number;
        additionalFields?: any;
    }> & {
        code: string;
        type: string;
        status: boolean;
        name?: string;
        description?: string;
        valueToCalculate?: number;
        additionalFields?: any;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        code: string;
        type: string;
        status: boolean;
        name?: string;
        description?: string;
        valueToCalculate?: number;
        additionalFields?: any;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        code: string;
        type: string;
        status: boolean;
        name?: string;
        description?: string;
        valueToCalculate?: number;
        additionalFields?: any;
    }>> & import("mongoose").FlatRecord<{
        code: string;
        type: string;
        status: boolean;
        name?: string;
        description?: string;
        valueToCalculate?: number;
        additionalFields?: any;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
