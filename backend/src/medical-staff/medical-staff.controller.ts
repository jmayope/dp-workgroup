import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { MedicalStaffService } from './medical-staff.service';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('medical-staff')
export class MedicalStaffController {
  constructor(private readonly medicalStaffService: MedicalStaffService) {}

  @Public()
  @Post()
  create(@Body() body: any) {
    return this.medicalStaffService.create(body);
  }
  @Public()
  @Post('where')
  findAll(@Body() body: any) {
    return this.medicalStaffService.findAll(body.where);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.medicalStaffService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.medicalStaffService.update(id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.medicalStaffService.remove(id);
  }
}
