import { Connection } from 'mongoose';
export declare const MedicalHistoryProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        patient: import("mongoose").Types.ObjectId;
        status: boolean;
        creationDate: NativeDate;
        details: any[];
        code?: string;
        observation?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        patient: import("mongoose").Types.ObjectId;
        status: boolean;
        creationDate: NativeDate;
        details: any[];
        code?: string;
        observation?: string;
    }> & {
        patient: import("mongoose").Types.ObjectId;
        status: boolean;
        creationDate: NativeDate;
        details: any[];
        code?: string;
        observation?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        patient: import("mongoose").Types.ObjectId;
        status: boolean;
        creationDate: NativeDate;
        details: any[];
        code?: string;
        observation?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        patient: import("mongoose").Types.ObjectId;
        status: boolean;
        creationDate: NativeDate;
        details: any[];
        code?: string;
        observation?: string;
    }>> & import("mongoose").FlatRecord<{
        patient: import("mongoose").Types.ObjectId;
        status: boolean;
        creationDate: NativeDate;
        details: any[];
        code?: string;
        observation?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
