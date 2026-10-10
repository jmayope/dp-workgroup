"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileProvider = void 0;
const profile_schema_1 = require("../schemas/profile.schema");
exports.ProfileProvider = [
    {
        provide: 'PROFILE_MODEL',
        useFactory: (connection) => connection.model('profiles', profile_schema_1.Profile),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=profile.provider.js.map