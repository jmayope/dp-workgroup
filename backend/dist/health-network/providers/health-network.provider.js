"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthNetworkProvider = void 0;
const health_network_schema_1 = require("../schemas/health-network.schema");
exports.HealthNetworkProvider = [
    {
        provide: 'HEALTH_NETWORK_MODEL',
        useFactory: (connection) => connection.model('healthNetworks', health_network_schema_1.HealthNetwork),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=health-network.provider.js.map