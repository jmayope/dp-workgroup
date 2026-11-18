import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MedicalHistoryService } from './medical-history.service';

@Controller('medical-history')
export class MedicalHistoryController {
  constructor(private readonly medicalHistoryService: MedicalHistoryService) {}

  @Post()
  create(@Body() body: any) {
    return this.medicalHistoryService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any) {
    return this.medicalHistoryService.findAll(body.where);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.medicalHistoryService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.medicalHistoryService.update(+id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.medicalHistoryService.remove(id);
  }
}
