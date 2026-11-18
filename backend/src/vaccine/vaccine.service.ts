import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class VaccineService {
  constructor(
    @Inject('VACCINE_MODEL') private Vaccine: Model<any>
  ) {}
  async create(body: any) {
    let result: any = await this.Vaccine.insertMany(body.news);
    return result;
  }

  async findAll(where: any) {
    let result: any = await this.Vaccine.find(where);
    return result;
  }

  async findOne(id: any) {
    let result: any = await this.Vaccine.findOne({_id: id})
    return result;
  }

  async update(id: any, updated: any) {
    let result: any = await this.Vaccine.updateOne({_id: id}, updated);
    return result;
  }

  async remove(id: any) {
    let result: any = await this.Vaccine.deleteOne({_id: id});
    return result;
  }
}
