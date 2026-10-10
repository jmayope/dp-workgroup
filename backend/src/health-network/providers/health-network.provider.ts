import { Connection } from 'mongoose';
import { HealthNetwork } from '../schemas/health-network.schema';

export const HealthNetworkProvider = [
    {
        provide: 'HEALTH_NETWORK_MODEL',
        useFactory: (connection: Connection) => connection.model('healthNetworks', HealthNetwork),
        inject: ['DATABASE_CONNECTION']
    }
]