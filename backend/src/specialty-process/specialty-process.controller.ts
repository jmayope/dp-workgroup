import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SpecialtyProcessService } from './specialty-process.service';

@Controller('specialty-process')
export class SpecialtyProcessController {
  constructor(private readonly specialtyProcessService: SpecialtyProcessService) {}

  @Post()
  create(@Body() body: any) {
    return this.specialtyProcessService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any) {
    return this.specialtyProcessService.findAll(body.where);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.specialtyProcessService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.specialtyProcessService.update(+id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.specialtyProcessService.remove(id);
  }
}
