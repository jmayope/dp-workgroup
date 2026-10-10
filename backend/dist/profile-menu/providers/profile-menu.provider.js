"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileMenuProvider = void 0;
const profile_menu_schema_1 = require("../schemas/profile-menu.schema");
exports.ProfileMenuProvider = [
    {
        provide: 'PROFILE_MENU_MODEL',
        useFactory: (connection) => connection.model('profilemenus', profile_menu_schema_1.ProfileMenu),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=profile-menu.provider.js.map