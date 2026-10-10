"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignProvider = void 0;
const campaign_schema_1 = require("../schemas/campaign.schema");
exports.CampaignProvider = [
    {
        provide: 'CAMPAIGN_MODEL',
        useFactory: (connection) => connection.model('campaigns', campaign_schema_1.Campaign),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=campaign.provider.js.map