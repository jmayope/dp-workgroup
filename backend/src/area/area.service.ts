import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class AreaService {
  constructor(
    @Inject('AREA_MODEL') private Area: Model<any>
  ) {}
  async create(body: any) {
    let result: any = await this.Area.insertMany(body.news);
    return result;
  }

  async findAll(where: any) {
    let result: any = await this.Area.find(where)
      .populate({path: 'areaType', model: 'typelists'})
      .populate({path: 'responsible', model: 'medicalStaffs'})
      .populate({path: 'status', model: 'typelists'});
    return result;
  }

  async findOne(id: any) {
    let result: any = await this.Area.findOne({_id: id})
    return result;
  }

  async update(id: any, updated: any) {
    let result: any = await this.Area.updateOne({_id: id}, updated);
    return result;
  }

  async remove(id: any) {
    let result: any = await this.Area.deleteOne({_id: id});
    return result;
  }
}
