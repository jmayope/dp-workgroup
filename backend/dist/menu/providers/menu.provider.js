"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuProvider = void 0;
const menu_schema_1 = require("../schemas/menu.schema");
exports.MenuProvider = [
    {
        provide: 'MENU_MODEL',
        useFactory: (connection) => connection.model('menus', menu_schema_1.Menu),
        inject: ['DATABASE_CONNECTION']
    }
];
//# sourceMappingURL=menu.provider.js.map