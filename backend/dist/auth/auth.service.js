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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("mongoose");
let AuthService = class AuthService {
    constructor(MedicalStaff, jwtService) {
        this.MedicalStaff = MedicalStaff;
        this.jwtService = jwtService;
    }
    async login(username, password) {
        let result = await this.MedicalStaff.findOne({ username: username, password: password })
            .populate({ path: 'profiles', populate: { path: 'specialty', model: 'specialties' } })
            .populate({ path: 'healthEstablisments.serviceDeliveryInstitution', model: 'serviceDeliveryInstitutions' });
        if (!result) {
            return null;
        }
        let userData = JSON.parse(JSON.stringify(result));
        let payload = { sub: result._id, username: result.username, password: result.password };
        userData.token = await this.jwtService.signAsync(payload);
        return userData;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('MEDICAL_STAFF_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map