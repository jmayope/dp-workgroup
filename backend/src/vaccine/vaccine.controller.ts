import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { VaccineService } from './vaccine.service';

@Controller('vaccine')
export class VaccineController {
  constructor(private readonly vaccineService: VaccineService) {}

  @Post()
  create(@Body() body: any) {
    return this.vaccineService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any) {
    return this.vaccineService.findAll(body.where);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.vaccineService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.vaccineService.update(id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.vaccineService.remove(id);
  }
}
