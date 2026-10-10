import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class PatientMeasurementService {
  constructor(
    @Inject('PATIENT_MEASUREMENT_MODEL') private PatientMeasurement: Model<any>
  ) {}
  async create(body: any) {
    let result: any = await this.PatientMeasurement.insertMany(body.news);
    return result;
  }

  async findAll(where: any) {
    let result: any = await this.PatientMeasurement.find(where);
    return result;
  }

  async findOne(id: any) {
    let result: any = await this.PatientMeasurement.findOne({_id: id})
    return result;
  }

  async update(id: any, updated: any) {
    let result: any = await this.PatientMeasurement.updateOne({_id: id}, updated);
    return result;
  }

  async remove(id: any) {
    let result: any = await this.PatientMeasurement.deleteOne({_id: id});
    return result;
  }
}
