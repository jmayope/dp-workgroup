import { Connection } from 'mongoose';
export declare const MedicalStaffProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        firstName: string;
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
        status: boolean;
        profiles: import("mongoose").Types.DocumentArray<{
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            profile?: import("mongoose").Types.ObjectId;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            profile?: import("mongoose").Types.ObjectId;
        }> & {
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            profile?: import("mongoose").Types.ObjectId;
        }>;
        code?: string;
        documentType?: string;
        username?: string;
        password?: string;
        profession?: string;
        workingCondition?: string;
        ups?: string;
        phone?: string;
        email?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        firstName: string;
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
        status: boolean;
        profiles: import("mongoose").Types.DocumentArray<{
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            profile?: import("mongoose").Types.ObjectId;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            profile?: import("mongoose").Types.ObjectId;
        }> & {
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            profile?: import("mongoose").Types.ObjectId;
        }>;
        code?: string;
        documentType?: string;
        username?: string;
        password?: string;
        profession?: string;
        workingCondition?: string;
        ups?: string;
        phone?: string;
        email?: string;
    }> & {
        firstName: string;
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
        status: boolean;
        profiles: import("mongoose").Types.DocumentArray<{
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            profile?: import("mongoose").Types.ObjectId;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            profile?: import("mongoose").Types.ObjectId;
        }> & {
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            profile?: import("mongoose").Types.ObjectId;
        }>;
        code?: string;
        documentType?: string;
        username?: string;
        password?: string;
        profession?: string;
        workingCondition?: string;
        ups?: string;
        phone?: string;
        email?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        firstName: string;
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
        status: boolean;
        profiles: import("mongoose").Types.DocumentArray<{
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            profile?: import("mongoose").Types.ObjectId;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            profile?: import("mongoose").Types.ObjectId;
        }> & {
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            profile?: import("mongoose").Types.ObjectId;
        }>;
        code?: string;
        documentType?: string;
        username?: string;
        password?: string;
        profession?: string;
        workingCondition?: string;
        ups?: string;
        phone?: string;
        email?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        firstName: string;
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
        status: boolean;
        profiles: import("mongoose").Types.DocumentArray<{
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            profile?: import("mongoose").Types.ObjectId;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            profile?: import("mongoose").Types.ObjectId;
        }> & {
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            profile?: import("mongoose").Types.ObjectId;
        }>;
        code?: string;
        documentType?: string;
        username?: string;
        password?: string;
        profession?: string;
        workingCondition?: string;
        ups?: string;
        phone?: string;
        email?: string;
    }>> & import("mongoose").FlatRecord<{
        firstName: string;
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
        status: boolean;
        profiles: import("mongoose").Types.DocumentArray<{
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            profile?: import("mongoose").Types.ObjectId;
        }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            profile?: import("mongoose").Types.ObjectId;
        }> & {
            serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
            profile?: import("mongoose").Types.ObjectId;
        }>;
        code?: string;
        documentType?: string;
        username?: string;
        password?: string;
        profession?: string;
        workingCondition?: string;
        ups?: string;
        phone?: string;
        email?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
