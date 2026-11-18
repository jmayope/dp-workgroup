import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

@Injectable()
export class MenuService {
  constructor(
        @Inject('MENU_MODEL') private Menu: Model<any>
      ) {}
      async create(body: any) {
        let result: any = await this.Menu.insertMany(body.news);
        return result;
      }
    
      async findAll(where: any, options?: any) {
        let result: any = await this.Menu.find(where).populate({ path: 'parent', model: 'menus'});
        // console.log(options);
        if (options.grouped) {
          let headers: any = JSON.parse(JSON.stringify(result.filter((r: any) => !r.parent)));
          headers.forEach((h: any) => {
            h.children = result.filter((r: any) => r.parent).filter((r: any) => r.parent._id == h._id);
          });
          result = headers;
        }
        return result;
      }
    
      async findOne(id: any) {
        let result: any = await this.Menu.findOne({_id: id})
        return result;
      }
    
      async update(id: any, updated: any) {
        let result: any = await this.Menu.updateOne({_id: id}, updated);
        return result;
      }
    
      async remove(id: any) {
        let result: any = await this.Menu.deleteOne({_id: id});
        return result;
      }
}
