import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    @Inject('MEDICAL_STAFF_MODEL')
    private MedicalStaff: Model<any>,
    private jwtService: JwtService
  ) {}
  
  async login(username: string, password: string): Promise<any> {
    let result: any = await this.MedicalStaff.findOne({username: username, password: password})
      .populate({ path: 'profiles', populate: { path: 'specialty', model: 'specialties'}})
      .populate({ path: 'healthEstablisments.serviceDeliveryInstitution', model: 'serviceDeliveryInstitutions'})
      ;
    if (!result) {
      return null;
    }
    let userData: any = JSON.parse(JSON.stringify(result));
    let payload = {sub: result._id, username: result.username, password: result.password};
    userData.token = await this.jwtService.signAsync(payload);
    return userData;
  }

}
