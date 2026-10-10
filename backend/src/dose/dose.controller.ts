import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { DoseService } from './dose.service';

@Controller('dose')
export class DoseController {
  constructor(private readonly doseService: DoseService) {}

  @Post()
  create(@Body() body: any) {
    return this.doseService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any) {
    return this.doseService.findAll(body.where);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.doseService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.doseService.update(+id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.doseService.remove(id);
  }
}
