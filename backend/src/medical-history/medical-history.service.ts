import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class MedicalHistoryService {
  constructor(
      @Inject('MEDICAL_HISTORY_MODEL') private MedicalHistory: Model<any>
    ) {}
    async create(body: any) {
      let result: any = await this.MedicalHistory.insertMany(body.news);
      return result;
    }
  
    async findAll(where: any) {
      let result: any = await this.MedicalHistory.find(where).populate({path: 'patient', model: 'patients'});
      return result;
    }
  
    async findOne(id: any) {
      let result: any = await this.MedicalHistory.findOne({_id: id})
      return result;
    }
  
    async update(id: any, updated: any) {
      let result: any = await this.MedicalHistory.updateOne({_id: id}, updated);
      return result;
    }
  
    async remove(id: any) {
      let result: any = await this.MedicalHistory.deleteOne({_id: id});
      return result;
    }
}
