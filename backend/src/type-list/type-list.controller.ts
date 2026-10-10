import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { TypeListService } from './type-list.service';

@Controller('type-list')
export class TypeListController {
  constructor(private readonly typeListService: TypeListService) {}

  @Post()
  create(@Body() body: any) {
    return this.typeListService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any, @Query() query) {
    return this.typeListService.findAll(body.where, query);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.typeListService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.typeListService.update(id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.typeListService.remove(id);
  }
}
