import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class KardexService {
  constructor(
    @Inject('KARDEX_MODEL') private Kardex: Model<any>,
    @Inject('KARDEX_MASTER_MODEL') private KardexMaster: Model<any>,
  ) {}
  async create(body: any) {
    for (let index = 0; index < body.news.length; index++) {
      let n = body.news[index];
      let resultMaster: any = await this.KardexMaster.findOneAndUpdate(
        { product: n.product }, 
        { 
          $inc: {availableStock: (n.valueToCalculate ? n.valueToCalculate : 1 ) * n.quantity },
          $setOnInsert: { product: n.product }
        }, 
        { upsert: true, new: true });
        n.nextQuantity = resultMaster.availableStock;
        n.previousQuantity = resultMaster.availableStock - n.quantity;
    }
    let result: any = await this.Kardex.insertMany(body.news);
    return result;
  }

  async findLastRecords(pagination?: any) {
    pagination = pagination || {page: 1, limit: 10};
    let result: any = await this.Kardex.find({}, {skip: (pagination.page - 1) * pagination.limit})
    .populate({path: 'product', model: 'products'})
    .populate({path: 'inputType', model: 'typelists'})
    .sort({ createdAt: -1 })
    .limit(pagination.limit); 

    return result;
  }

  async getQuantity(where: any) {
    let result: any = await this.Kardex.find(where).countDocuments();
    return {
      quantity: result
    }
  }

  async findAll(where: any, options?: any) {
    let result: any = await this.Kardex.find(where)
      .populate({path: 'product', model: 'products'})
      .populate({path: 'inputType', model: 'typelists'})
      .populate({path: 'assignedTo', model: 'medicalStaffs'})
      .populate({path: 'status', model: 'typelists'});
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
    let result: any = await this.Kardex.findOne({_id: id})
    return result;
  }

  async update(id: any, updated: any) {
    let result: any = await this.Kardex.updateOne({_id: id}, updated);
    return result;
  }

  async remove(id: any) {
    let toDelete: any = await this.Kardex.findOne({_id: id}).populate({path: 'product', model: 'products'});
    let result: any = await this.Kardex.deleteOne({_id: id});
    let resultMaster: any = await this.KardexMaster.findOneAndUpdate(
      {
        product: toDelete.product._id
      },
      {
        $inc: { availableStock: -toDelete.quantity }
      },
      { upsert: true }
    );
    return result;
  }
}
