"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KardexModule = void 0;
const common_1 = require("@nestjs/common");
const kardex_service_1 = require("./kardex.service");
const kardex_controller_1 = require("./kardex.controller");
const database_module_1 = require("../database/database.module");
const kardex_provider_1 = require("./providers/kardex.provider");
const kardex_master_provider_1 = require("../kardex-master/providers/kardex-master.provider");
let KardexModule = class KardexModule {
};
exports.KardexModule = KardexModule;
exports.KardexModule = KardexModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [kardex_controller_1.KardexController],
        providers: [kardex_service_1.KardexService, ...kardex_provider_1.KardexProvider, ...kardex_master_provider_1.KardexMasterProvider],
    })
], KardexModule);
//# sourceMappingURL=kardex.module.js.map