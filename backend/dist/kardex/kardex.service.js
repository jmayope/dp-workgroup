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
exports.KardexService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
let KardexService = class KardexService {
    constructor(Kardex, KardexMaster) {
        this.Kardex = Kardex;
        this.KardexMaster = KardexMaster;
    }
    async create(body) {
        for (let index = 0; index < body.news.length; index++) {
            let n = body.news[index];
            let resultMaster = await this.KardexMaster.findOneAndUpdate({ product: n.product }, {
                $inc: { availableStock: (n.valueToCalculate ? n.valueToCalculate : 1) * n.quantity },
                $setOnInsert: { product: n.product }
            }, { upsert: true, new: true });
            n.nextQuantity = resultMaster.availableStock;
            n.previousQuantity = resultMaster.availableStock - n.quantity;
        }
        let result = await this.Kardex.insertMany(body.news);
        return result;
    }
    async findLastRecords(pagination) {
        pagination = pagination || { page: 1, limit: 10 };
        let result = await this.Kardex.find({}, { skip: (pagination.page - 1) * pagination.limit })
            .populate({ path: 'product', model: 'products' })
            .populate({ path: 'inputType', model: 'typelists' })
            .sort({ createdAt: -1 })
            .limit(pagination.limit);
        return result;
    }
    async getQuantity(where) {
        let result = await this.Kardex.find(where).countDocuments();
        return {
            quantity: result
        };
    }
    async findAll(where, options) {
        let result = await this.Kardex.find(where)
            .populate({ path: 'product', model: 'products' })
            .populate({ path: 'inputType', model: 'typelists' })
            .populate({ path: 'assignedTo', model: 'medicalStaffs' })
            .populate({ path: 'status', model: 'typelists' });
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
        let result = await this.Kardex.findOne({ _id: id });
        return result;
    }
    async update(id, updated) {
        let result = await this.Kardex.updateOne({ _id: id }, updated);
        return result;
    }
    async remove(id) {
        let toDelete = await this.Kardex.findOne({ _id: id }).populate({ path: 'product', model: 'products' });
        let result = await this.Kardex.deleteOne({ _id: id });
        let resultMaster = await this.KardexMaster.findOneAndUpdate({
            product: toDelete.product._id
        }, {
            $inc: { availableStock: -toDelete.quantity }
        }, { upsert: true });
        return result;
    }
};
exports.KardexService = KardexService;
exports.KardexService = KardexService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('KARDEX_MODEL')),
    __param(1, (0, common_1.Inject)('KARDEX_MASTER_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], KardexService);
//# sourceMappingURL=kardex.service.js.map