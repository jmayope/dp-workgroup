import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class KardexMasterService {
  constructor(
    @Inject('KARDEX_MASTER_MODEL') private KardexMaster: Model<any>,
  ) {}
  async create(body: any) {
    let result: any = await this.KardexMaster.insertMany(body.news);
    return result;
  }

  async getQuantity(where: any) {
    let result: any = await this.KardexMaster.find(where).countDocuments();
    return {
      quantity: result
    }
  }

  async findAll(where: any, options?: any) {
    let result: any = await this.KardexMaster.find(where)
      .populate({path: 'product', model: 'products'})
    if (options.grouped) {
      let headers: any = JSON.parse(JSON.stringify(result.filter((r: any) => !r.menu.parent)));
      headers.forEach((h: any) => {
        h.children = result.filter((r: any) => r.menu.parent).filter((r: any) => r.menu.parent._id == h.menu._id);
      });
      result = headers;
    }
    return result;
  }

  async findOne(id: any) {
    let result: any = await this.KardexMaster.findOne({_id: id})
    return result;
  }

  async update(id: any, updated: any) {
    let result: any = await this.KardexMaster.updateOne({_id: id}, updated);
    return result;
  }

  async remove(id: any) {
    let result: any = await this.KardexMaster.deleteOne({_id: id});
    return result;
  }
}
