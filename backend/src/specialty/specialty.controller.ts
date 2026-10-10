import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SpecialtyService } from './specialty.service';

@Controller('specialty')
export class SpecialtyController {
  constructor(private readonly specialtyService: SpecialtyService) {}

  @Post()
  create(@Body() body: any) {
    return this.specialtyService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any) {
    return this.specialtyService.findAll(body.where);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.specialtyService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.specialtyService.update(id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.specialtyService.remove(id);
  }
}
