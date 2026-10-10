"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileMenuService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let ProfileMenuService = class ProfileMenuService {
    constructor(ProfileMenu) {
        this.ProfileMenu = ProfileMenu;
    }
    async create(body) {
        let result = await this.ProfileMenu.insertMany(body.news);
        return result;
    }
    async findAll(where, options) {
        let result = await this.ProfileMenu.find(where).populate(['menu', 'profile']);
        if (options.grouped) {
            let headers = JSON.parse(JSON.stringify(result.filter((r) => !r.menu.parent)));
            headers.forEach((h) => {
                h.children = result.filter((r) => r.menu.parent).filter((r) => r.menu.parent._id == h.menu._id);
            });
            result = headers;
        }
        return result;
    }
    async findOne(id) {
        let result = await this.ProfileMenu.findOne({ _id: id });
        return result;
    }
    async update(id, updated) {
        let result = await this.ProfileMenu.updateOne({ _id: id }, updated);
        return result;
    }
    async remove(id) {
        let result = await this.ProfileMenu.deleteOne({ _id: id });
        return result;
    }
};
exports.ProfileMenuService = ProfileMenuService;
exports.ProfileMenuService = ProfileMenuService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('PROFILE_MENU_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ProfileMenuService);
//# sourceMappingURL=profile-menu.service.js.map