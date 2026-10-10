import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class CampaignService {
  constructor(
    @Inject('CAMPAIGN_MODEL') private Campaign: Model<any>
  ) {}
  async create(body: any) {
    let result: any = await this.Campaign.insertMany(body.news);
    return result;
  }

  async findAll(where: any) {
    let result: any = await this.Campaign.find(where)
      .populate({path: 'campaignType', model: 'typelists'})
      .populate({path: 'campaignStatus', model: 'typelists'})
      .populate({path: 'resources.article', model: 'kardexmasters', populate: {path: 'product', model: 'products'}})
      .populate({path: 'personal.medicalStaff', model: 'medicalStaffs'})
      ;
    return result;
  }

  async findOne(id: any) {
    let result: any = await this.Campaign.findOne({_id: id})
    return result;
  }

  async update(id: any, updated: any) {
    let result: any = await this.Campaign.updateOne({_id: id}, updated);
    return result;
  }

  async remove(id: any) {
    let result: any = await this.Campaign.deleteOne({_id: id});
    return result;
  }
}
