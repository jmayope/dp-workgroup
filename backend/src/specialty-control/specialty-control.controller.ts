import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SpecialtyControlService } from './specialty-control.service';

@Controller('specialty-control')
export class SpecialtyControlController {
  constructor(private readonly specialtyControlService: SpecialtyControlService) {}

  @Post()
  create(@Body() body: any) {
    return this.specialtyControlService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any) {
    return this.specialtyControlService.findAll(body.where);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.specialtyControlService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.specialtyControlService.update(+id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.specialtyControlService.remove(id);
  }
}
