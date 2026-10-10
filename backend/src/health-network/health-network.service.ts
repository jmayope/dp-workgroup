import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class HealthNetworkService {
  constructor(
    @Inject('HEALTH_NETWORK_MODEL') private HealthNetwork: Model<any>
  ) {}
  async create(body: any) {
    let result: any = await this.HealthNetwork.insertMany(body.news);
    return result;
  }

  async findAll(where: any) {
    let result: any = await this.HealthNetwork.find(where);
    return result;
  }

  async findOne(id: any) {
    let result: any = await this.HealthNetwork.findOne({_id: id})
    return result;
  }

  async update(id: any, updated: any) {
    let result: any = await this.HealthNetwork.updateOne({_id: id}, updated);
    return result;
  }

  async remove(id: any) {
    let result: any = await this.HealthNetwork.deleteOne({_id: id});
    return result;
  }
}
