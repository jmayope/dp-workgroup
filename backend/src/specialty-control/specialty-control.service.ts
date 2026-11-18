import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class SpecialtyControlService {
  constructor(
      @Inject('SPECIALTY_CONTROL_MODEL') private SpecialtyControl: Model<any>
    ) {}
    async create(body: any) {
      let result: any = await this.SpecialtyControl.insertMany(body.news);
      return result;
    }
  
    async findAll(where: any) {
      let result: any = await this.SpecialtyControl.find(where).populate('growthStage');
      return result;
    }
  
    async findOne(id: any) {
      let result: any = await this.SpecialtyControl.findOne({_id: id})
      return result;
    }
  
    async update(id: any, updated: any) {
      let result: any = await this.SpecialtyControl.updateOne({_id: id}, updated);
      return result;
    }
  
    async remove(id: any) {
      let result: any = await this.SpecialtyControl.deleteOne({_id: id});
      return result;
    }
}
