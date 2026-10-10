import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class ProfileService {
  constructor(
      @Inject('PROFILE_MODEL') private Profile: Model<any>
    ) {}
    async create(body: any) {
      let result: any = await this.Profile.insertMany(body.news);
      return result;
    }
  
    async findAll(where: any) {
      let result: any = await this.Profile.find(where).populate('specialty');
      return result;
    }
  
    async findOne(id: any) {
      let result: any = await this.Profile.findOne({_id: id})
      return result;
    }
  
    async update(id: any, updated: any) {
      let result: any = await this.Profile.updateOne({_id: id}, updated);
      return result;
    }
  
    async remove(id: any) {
      let result: any = await this.Profile.deleteOne({_id: id});
      return result;
    }
}
