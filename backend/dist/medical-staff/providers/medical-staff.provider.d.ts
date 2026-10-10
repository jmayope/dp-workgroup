import { Connection } from 'mongoose';
export declare const MedicalStaffProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        firstName: string;
        status: boolean;
        lastName: string;
        changedPassword: boolean;
        healthEstablisments: import("mongoose").Types.DocumentArray<{
            startDate: NativeDate;
            createAt: NativeDate;
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            finishDate?: NativeDate;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            startDate: NativeDate;
            createAt: NativeDate;
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            finishDate?: NativeDate;
        }> & {
            startDate: NativeDate;
            createAt: NativeDate;
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            finishDate?: NativeDate;
        }>;
        profiles: import("mongoose").Types.ObjectId[];
        code?: string;
        phone?: string;
        email?: string;
        username?: string;
        password?: string;
        profession?: string;
        workingCondition?: string;
        ups?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        firstName: string;
        status: boolean;
        lastName: string;
        changedPassword: boolean;
        healthEstablisments: import("mongoose").Types.DocumentArray<{
            startDate: NativeDate;
            createAt: NativeDate;
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            finishDate?: NativeDate;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            startDate: NativeDate;
            createAt: NativeDate;
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            finishDate?: NativeDate;
        }> & {
            startDate: NativeDate;
            createAt: NativeDate;
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            finishDate?: NativeDate;
        }>;
        profiles: import("mongoose").Types.ObjectId[];
        code?: string;
        phone?: string;
        email?: string;
        username?: string;
        password?: string;
        profession?: string;
        workingCondition?: string;
        ups?: string;
    }> & {
        firstName: string;
        status: boolean;
        lastName: string;
        changedPassword: boolean;
        healthEstablisments: import("mongoose").Types.DocumentArray<{
            startDate: NativeDate;
            createAt: NativeDate;
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            finishDate?: NativeDate;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            startDate: NativeDate;
            createAt: NativeDate;
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            finishDate?: NativeDate;
        }> & {
            startDate: NativeDate;
            createAt: NativeDate;
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            finishDate?: NativeDate;
        }>;
        profiles: import("mongoose").Types.ObjectId[];
        code?: string;
        phone?: string;
        email?: string;
        username?: string;
        password?: string;
        profession?: string;
        workingCondition?: string;
        ups?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        firstName: string;
        status: boolean;
        lastName: string;
        changedPassword: boolean;
        healthEstablisments: import("mongoose").Types.DocumentArray<{
            startDate: NativeDate;
            createAt: NativeDate;
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            finishDate?: NativeDate;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            startDate: NativeDate;
            createAt: NativeDate;
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            finishDate?: NativeDate;
        }> & {
            startDate: NativeDate;
            createAt: NativeDate;
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            finishDate?: NativeDate;
        }>;
        profiles: import("mongoose").Types.ObjectId[];
        code?: string;
        phone?: string;
        email?: string;
        username?: string;
        password?: string;
        profession?: string;
        workingCondition?: string;
        ups?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        firstName: string;
        status: boolean;
        lastName: string;
        changedPassword: boolean;
        healthEstablisments: import("mongoose").Types.DocumentArray<{
            startDate: NativeDate;
            createAt: NativeDate;
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            finishDate?: NativeDate;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            startDate: NativeDate;
            createAt: NativeDate;
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            finishDate?: NativeDate;
        }> & {
            startDate: NativeDate;
            createAt: NativeDate;
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            finishDate?: NativeDate;
        }>;
        profiles: import("mongoose").Types.ObjectId[];
        code?: string;
        phone?: string;
        email?: string;
        username?: string;
        password?: string;
        profession?: string;
        workingCondition?: string;
        ups?: string;
    }>> & import("mongoose").FlatRecord<{
        firstName: string;
        status: boolean;
        lastName: string;
        changedPassword: boolean;
        healthEstablisments: import("mongoose").Types.DocumentArray<{
            startDate: NativeDate;
            createAt: NativeDate;
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            finishDate?: NativeDate;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            startDate: NativeDate;
            createAt: NativeDate;
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            finishDate?: NativeDate;
        }> & {
            startDate: NativeDate;
            createAt: NativeDate;
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            finishDate?: NativeDate;
        }>;
        profiles: import("mongoose").Types.ObjectId[];
        code?: string;
        phone?: string;
        email?: string;
        username?: string;
        password?: string;
        profession?: string;
        workingCondition?: string;
        ups?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
