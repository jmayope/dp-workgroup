import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class MedicalStaffService {
  constructor(
    @Inject('MEDICAL_STAFF_MODEL') private MedicalStaff: Model<any>
  ) {}
  async create(body: any) {
    let result: any = await this.MedicalStaff.insertMany(body.news);
    return result;
  }

  async findAll(where: any) {
    let result: any = await this.MedicalStaff.find(where)
    .populate({ path: 'profiles', populate: { path: 'specialty', model: 'specialties'}})
    .populate({ path: 'healthEstablisments.serviceDeliveryInstitution', model: 'serviceDeliveryInstitutions'})
    ;
    return result;
  }

  async findOne(id: any) {
    let result: any = await this.MedicalStaff.findOne({_id: id})
    return result;
  }

  async update(id: any, updated: any) {
    console.log(id);
    console.log(updated);
    let result: any = await this.MedicalStaff.updateOne({_id: id}, updated);
    return result;
  }

  async remove(id: any) {
    let result: any = await this.MedicalStaff.deleteOne({_id: id});
    return result;
  }
}
