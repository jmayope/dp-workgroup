import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class SpecialtyService {
  constructor(
      @Inject('SPECIALTY_MODEL') private Specialty: Model<any>
    ) {}
    async create(body: any) {
      let result: any = await this.Specialty.insertMany(body.news);
      return result;
    }
  
    async findAll(where: any) {
      let result: any = await this.Specialty.find(where);
      return result;
    }
  
    async findOne(id: any) {
      let result: any = await this.Specialty.findOne({_id: id})
      return result;
    }
  
    async update(id: any, updated: any) {
      let result: any = await this.Specialty.updateOne({_id: id}, updated);
      return result;
    }
  
    async remove(id: any) {
      let result: any = await this.Specialty.deleteOne({_id: id});
      return result;
    }
}
