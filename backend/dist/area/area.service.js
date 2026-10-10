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
exports.AreaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let AreaService = class AreaService {
    constructor(Area) {
        this.Area = Area;
    }
    async create(body) {
        let result = await this.Area.insertMany(body.news);
        return result;
    }
    async findAll(where) {
        let result = await this.Area.find(where)
            .populate({ path: 'areaType', model: 'typelists' })
            .populate({ path: 'responsible', model: 'medicalStaffs' })
            .populate({ path: 'status', model: 'typelists' });
        return result;
    }
    async findOne(id) {
        let result = await this.Area.findOne({ _id: id });
        return result;
    }
    async update(id, updated) {
        let result = await this.Area.updateOne({ _id: id }, updated);
        return result;
    }
    async remove(id) {
        let result = await this.Area.deleteOne({ _id: id });
        return result;
    }
};
exports.AreaService = AreaService;
exports.AreaService = AreaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('AREA_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], AreaService);
//# sourceMappingURL=area.service.js.map