"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrowthStageProvider = void 0;
const growth_stage_schema_1 = require("../schemas/growth-stage.schema");
exports.GrowthStageProvider = [
    {
        provide: 'GROWTH_STAGE_MODEL',
        useFactory: (connection) => connection.model('growthstages', growth_stage_schema_1.GrowthStage),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=growth-stage.provider.js.map