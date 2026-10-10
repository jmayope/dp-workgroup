"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeListModule = void 0;
const common_1 = require("@nestjs/common");
const type_list_service_1 = require("./type-list.service");
const type_list_controller_1 = require("./type-list.controller");
const database_module_1 = require("../database/database.module");
const type_list_provider_1 = require("./providers/type-list.provider");
let TypeListModule = class TypeListModule {
};
exports.TypeListModule = TypeListModule;
exports.TypeListModule = TypeListModule = __decorate([
    (0, common_1.Module)({
        imports: [database_module_1.DatabaseModule],
        controllers: [type_list_controller_1.TypeListController],
        providers: [type_list_service_1.TypeListService, ...type_list_provider_1.TypeListProvider],
    })
], TypeListModule);
//# sourceMappingURL=type-list.module.js.map