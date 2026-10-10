import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AreaService } from './area.service';

@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) {}

  @Post()
  create(@Body() body: any) {
    return this.areaService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any) {
    return this.areaService.findAll(body.where);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.areaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.areaService.update(id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.areaService.remove(id);
  }
}
