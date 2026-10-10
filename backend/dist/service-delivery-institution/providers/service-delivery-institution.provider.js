"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceDeliveryInstitutionProvider = void 0;
const service_delivery_institution_schema_1 = require("../schemas/service-delivery-institution.schema");
exports.ServiceDeliveryInstitutionProvider = [
    {
        provide: 'SERVICE_DELIVERY_INSTITUTION_MODEL',
        useFactory: (connection) => connection.model('serviceDeliveryInstitutions', service_delivery_institution_schema_1.ServiceDeliveryInstitution),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=service-delivery-institution.provider.js.map