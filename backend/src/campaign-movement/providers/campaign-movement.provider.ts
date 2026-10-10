import { Connection } from 'mongoose';
import { CampaignMovement } from '../schemas/campaign-movement.schema';

export const CampaignMovementProvider = [
    {
        provide: 'CAMPAIGN_MOVEMENT_MODEL',
        useFactory: (connection: Connection) => connection.model('campaignmovements', CampaignMovement),
        inject: ['DATABASE_CONNECTION']
    }
]