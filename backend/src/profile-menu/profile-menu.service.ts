import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class ProfileMenuService {
  constructor(
    @Inject('PROFILE_MENU_MODEL') private ProfileMenu: Model<any>,
  ) {}
  async create(body: any) {
    let result: any = await this.ProfileMenu.insertMany(body.news);
    return result;
  }

  async findAll(where: any, options?: any) {
    let result: any = await this.ProfileMenu.find(where).populate(['menu', 'profile']);
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
    let result: any = await this.ProfileMenu.findOne({_id: id})
    return result;
  }

  async update(id: any, updated: any) {
    let result: any = await this.ProfileMenu.updateOne({_id: id}, updated);
    return result;
  }

  async remove(id: any) {
    let result: any = await this.ProfileMenu.deleteOne({_id: id});
    return result;
  }
}
