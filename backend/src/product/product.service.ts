import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @Inject('PRODUCT_MODEL') private Product: Model<any>
  ) {}
  async create(body: any) {
    let result: any = await this.Product.insertMany(body.news);
    return result;
  }

  async findAll(where: any) {
    let result: any = await this.Product.find(where).populate({ path: 'category', model: "typelists"}).populate({ path: 'measurementUnit', model: "typelists"});
    return result;
  }

  async getQuantity(where: any) {
    let result: any = await this.Product.find(where).countDocuments();
    return {
      quantity: result
    };
  }

  async findOne(id: any) {
    let result: any = await this.Product.findOne({_id: id})
    return result;
  }

  async update(id: any, updated: any) {
    let result: any = await this.Product.updateOne({_id: id}, updated);
    return result;
  }

  async remove(id: any) {
    let result: any = await this.Product.deleteOne({_id: id});
    return result;
  }
}
