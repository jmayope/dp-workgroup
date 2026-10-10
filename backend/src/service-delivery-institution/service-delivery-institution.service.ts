import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class ServiceDeliveryInstitutionService {
  constructor(
  @Inject('SERVICE_DELIVERY_INSTITUTION_MODEL') private ServiceDeliveryInstitution: Model<any>
  ) {}

  async create(body: any) {
    let result: any = await this.ServiceDeliveryInstitution.insertMany(body.news);
    return result;
  }

  async findAll(where: any) {
    let result: any = await this.ServiceDeliveryInstitution.find(where);
    return result;
  }

  async findOne(id: any) {
    let result: any = await this.ServiceDeliveryInstitution.findOne({_id: id})
    return result;
  }

  async update(id: any, updated: any) {
    let result: any = await this.ServiceDeliveryInstitution.updateOne({_id: id}, updated);
    return result;
  }

  async remove(id: any) {
    let result: any = await this.ServiceDeliveryInstitution.deleteOne({_id: id});
    return result;
  }
}
