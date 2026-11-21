"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseProvider = void 0;
const config_1 = require("@nestjs/config");
const mongoose = require("mongoose");
exports.DatabaseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (configService) => {
            const dbUrl = configService.get('DB_URL');
            return mongoose.connect(dbUrl);
        },
        inject: [config_1.ConfigService]
    }
];
//# sourceMappingURL=database.provider.js.map