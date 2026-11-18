import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class AnthropometricMeasurementService {
  constructor(
      @Inject('ANTHROPOMETRIC_MEASUREMENT_MODEL') private AnthropometricMeasurement: Model<any>
    ) { }
    async create(body: any) {
      let result: any = await this.AnthropometricMeasurement.insertMany(body.news);
      return result;
    }
  
    async findAll(where: any) {
      let result: any = await this.AnthropometricMeasurement.find(where);
      return result;
    }
  
    async findOne(id: any) {
      let result: any = await this.AnthropometricMeasurement.findOne({_id: id})
      return result;
    }
  
    async update(id: any, updated: any) {
      let result: any = await this.AnthropometricMeasurement.updateOne({_id: id}, updated);
      return result;
    }
  
    async remove(id: any) {
      let result: any = await this.AnthropometricMeasurement.deleteOne({_id: id});
      return result;
    }
}
