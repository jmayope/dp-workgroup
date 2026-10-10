import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class GrowthStageService {
  constructor(
    @Inject('GROWTH_STAGE_MODEL') private GrowthStage: Model<any>
  ) { }
  async create(body: any) {
    let result: any = await this.GrowthStage.insertMany(body.news);
    return result;
  }

  async findAll(where: any) {
    let result: any = await this.GrowthStage.find(where).populate({path: 'vaccines', model: 'products'});
    return result;
  }

  async findOne(id: any) {
    let result: any = await this.GrowthStage.findOne({_id: id})
    return result;
  }

  async update(id: any, updated: any) {
    let result: any = await this.GrowthStage.updateOne({_id: id}, updated);
    return result;
  }

  async remove(id: any) {
    let result: any = await this.GrowthStage.deleteOne({_id: id});
    return result;
  }
}
