import { Connection } from 'mongoose';
import { Campaign } from '../schemas/campaign.schema';

export const CampaignProvider = [
    {
        provide: 'CAMPAIGN_MODEL',
        useFactory: (connection: Connection) => connection.model('campaigns', Campaign),
        inject: ['DATABASE_CONNECTION']
    }
]