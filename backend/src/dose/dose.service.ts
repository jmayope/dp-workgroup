import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class DoseService {
  constructor(
    @Inject('DOSE_MODEL') private Dose: Model<any>
  ) {}
  async create(body: any) {
    let result: any = await this.Dose.insertMany(body.news);
    return result;
  }

  async findAll(where: any) {
    let result: any = await this.Dose.find(where).populate('growthStage').populate({path: 'vaccine', model: 'products'});
    return result;
  }

  async findOne(id: any) {
    let result: any = await this.Dose.findOne({_id: id})
    return result;
  }

  async update(id: any, updated: any) {
    let result: any = await this.Dose.updateOne({_id: id}, updated);
    return result;
  }

  async remove(id: any) {
    let result: any = await this.Dose.deleteOne({_id: id});
    return result;
  }
}
