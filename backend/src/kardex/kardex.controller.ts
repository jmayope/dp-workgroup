import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put, Headers } from '@nestjs/common';
import { KardexService } from './kardex.service';

@Controller('kardex')
export class KardexController {
  constructor(private readonly kardexService: KardexService) {}

  @Post()
  create(@Body() body: any) {
    return this.kardexService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any, @Query() query) {
    return this.kardexService.findAll(body.where, query);
  }

  @Post('last-records')
  findLastRecords(@Body() body: any) {
    return this.kardexService.findLastRecords(body.pagination);
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
      return this.kardexService.getQuantity(body.where);
    }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.kardexService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.kardexService.update(id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.kardexService.remove(id);
  }
}
