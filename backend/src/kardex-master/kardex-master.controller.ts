import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Headers, Put } from '@nestjs/common';
import { KardexMasterService } from './kardex-master.service';

@Controller('kardex-master')
export class KardexMasterController {
  constructor(private readonly kardexMasterService: KardexMasterService) {}

  @Post()
  create(@Body() body: any) {
    return this.kardexMasterService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any, @Query() query) {
    return this.kardexMasterService.findAll(body.where, query);
  }

  @Post('quantity')
    getQuantity(@Headers() headers, @Body() body: any) {
      if (headers['app-type']) {
        body.where = {
          $or: [
            {
              "product.code": {$regex: body.text, $options: 'i'}
            },
            {
              "product.name": {$regex: body.text, $options: 'i'}
            },
            {
              "reason": {$regex: body.text, $options: 'i'}
            }
          ]
        }
      }
      return this.kardexMasterService.getQuantity(body.where);
    }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.kardexMasterService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.kardexMasterService.update(+id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.kardexMasterService.remove(id);
  }
}
