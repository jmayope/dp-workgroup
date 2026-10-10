import { Connection } from 'mongoose';
import { ServiceDeliveryInstitution } from '../schemas/service-delivery-institution.schema';

export const ServiceDeliveryInstitutionProvider = [
    {
        provide: 'SERVICE_DELIVERY_INSTITUTION_MODEL',
        useFactory: (connection: Connection) => connection.model('serviceDeliveryInstitutions', ServiceDeliveryInstitution),
        inject: ['DATABASE_CONNECTION']
    }
]