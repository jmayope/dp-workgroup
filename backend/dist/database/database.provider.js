"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseProvider = void 0;
const mongoose = require("mongoose");
const constants_1 = require("../constants");
exports.DatabaseProvider = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: () => mongoose.connect(constants_1.DB_URL)
    }
];
//# sourceMappingURL=database.provider.js.map