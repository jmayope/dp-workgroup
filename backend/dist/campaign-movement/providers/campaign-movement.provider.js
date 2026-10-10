"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CampaignMovementProvider = void 0;
const campaign_movement_schema_1 = require("../schemas/campaign-movement.schema");
exports.CampaignMovementProvider = [
    {
        provide: 'CAMPAIGN_MOVEMENT_MODEL',
        useFactory: (connection) => connection.model('campaignmovements', campaign_movement_schema_1.CampaignMovement),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=campaign-movement.provider.js.map