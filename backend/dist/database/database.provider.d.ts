import * as mongoose from 'mongoose';
export declare const DatabaseProvider: {
    provide: string;
    useFactory: () => Promise<typeof mongoose>;
}[];
