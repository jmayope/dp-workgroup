import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class CampaignMovementService {
  constructor(
    @Inject('CAMPAIGN_MOVEMENT_MODEL') private CampaignMovement: Model<any>
  ) {}
  async create(body: any) {
    let result: any = await this.CampaignMovement.insertMany(body.news);
    return result;
  }

  async findAll(where: any) {
    let result: any = await this.CampaignMovement.find(where);
    return result;
  }

  async findOne(id: any) {
    let result: any = await this.CampaignMovement.findOne({_id: id})
    return result;
  }

  async update(id: any, updated: any) {
    let result: any = await this.CampaignMovement.updateOne({_id: id}, updated);
    return result;
  }

  async remove(id: any) {
    let result: any = await this.CampaignMovement.deleteOne({_id: id});
    return result;
  }
}
