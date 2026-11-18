import { Connection } from 'mongoose';
export declare const CampaignProvider: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        status: boolean;
        createAt: NativeDate;
        usageExternalForm: boolean;
        resources: any[];
        personal: any[];
        serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
        name?: string;
        startDate?: NativeDate;
        finishDate?: NativeDate;
        campaignType?: import("mongoose").Types.ObjectId;
        campaignStatus?: import("mongoose").Types.ObjectId;
        urlExternalForm?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        status: boolean;
        createAt: NativeDate;
        usageExternalForm: boolean;
        resources: any[];
        personal: any[];
        serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
        name?: string;
        startDate?: NativeDate;
        finishDate?: NativeDate;
        campaignType?: import("mongoose").Types.ObjectId;
        campaignStatus?: import("mongoose").Types.ObjectId;
        urlExternalForm?: string;
    }> & {
        status: boolean;
        createAt: NativeDate;
        usageExternalForm: boolean;
        resources: any[];
        personal: any[];
        serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
        name?: string;
        startDate?: NativeDate;
        finishDate?: NativeDate;
        campaignType?: import("mongoose").Types.ObjectId;
        campaignStatus?: import("mongoose").Types.ObjectId;
        urlExternalForm?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        status: boolean;
        createAt: NativeDate;
        usageExternalForm: boolean;
        resources: any[];
        personal: any[];
        serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
        name?: string;
        startDate?: NativeDate;
        finishDate?: NativeDate;
        campaignType?: import("mongoose").Types.ObjectId;
        campaignStatus?: import("mongoose").Types.ObjectId;
        urlExternalForm?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        status: boolean;
        createAt: NativeDate;
        usageExternalForm: boolean;
        resources: any[];
        personal: any[];
        serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
        name?: string;
        startDate?: NativeDate;
        finishDate?: NativeDate;
        campaignType?: import("mongoose").Types.ObjectId;
        campaignStatus?: import("mongoose").Types.ObjectId;
        urlExternalForm?: string;
    }>> & import("mongoose").FlatRecord<{
        status: boolean;
        createAt: NativeDate;
        usageExternalForm: boolean;
        resources: any[];
        personal: any[];
        serviceDeliveryInstitution?: import("mongoose").Types.ObjectId;
        name?: string;
        startDate?: NativeDate;
        finishDate?: NativeDate;
        campaignType?: import("mongoose").Types.ObjectId;
        campaignStatus?: import("mongoose").Types.ObjectId;
        urlExternalForm?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>>;
    inject: string[];
}[];
