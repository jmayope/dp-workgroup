import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class SpecialtyProcessService {
  constructor(
      @Inject('SPECIALTY_PROCESS_MODEL') private SpecialtyProcess: Model<any>
    ) {}
    async create(body: any) {
      let result: any = await this.SpecialtyProcess.insertMany(body.news);
      return result;
    }
  
    async findAll(where: any) {
      let result: any = await this.SpecialtyProcess.find(where);
      return result;
    }
  
    async findOne(id: any) {
      let result: any = await this.SpecialtyProcess.findOne({_id: id})
      return result;
    }
  
    async update(id: any, updated: any) {
      let result: any = await this.SpecialtyProcess.updateOne({_id: id}, updated);
      return result;
    }
  
    async remove(id: any) {
      let result: any = await this.SpecialtyProcess.deleteOne({_id: id});
      return result;
    }
}
