import { Connection } from 'mongoose';
import { GrowthStage } from '../schemas/growth-stage.schema';

export const GrowthStageProvider = [
    {
        provide: 'GROWTH_STAGE_MODEL',
        useFactory: (connection: Connection) => connection.model('growthstages', GrowthStage),
        inject: ['DATABASE_CONNECTION']
    }
]