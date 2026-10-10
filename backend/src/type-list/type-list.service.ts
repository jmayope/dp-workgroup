import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class TypeListService {
  constructor(
    @Inject('TYPE_LIST_MODEL') private TypeList: Model<any>,
  ) {}
  async create(body: any) {
    let result: any = await this.TypeList.insertMany(body.news);
    return result;
  }

  async findAll(where: any, options?: any) {
    let result: any = await this.TypeList.find(where);
    return result;
  }

  async findOne(id: any) {
    let result: any = await this.TypeList.findOne({_id: id})
    return result;
  }

  async update(id: any, updated: any) {
    let result: any = await this.TypeList.updateOne({_id: id}, updated);
    return result;
  }

  async remove(id: any) {
    let result: any = await this.TypeList.deleteOne({_id: id});
    return result;
  }
}
