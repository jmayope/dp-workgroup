import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { PatientMeasurementService } from './patient-measurement.service';

@Controller('patient-measurement')
export class PatientMeasurementController {
  constructor(private readonly patientMeasurementService: PatientMeasurementService) {}

  @Post()
  create(@Body() body: any) {
    return this.patientMeasurementService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any) {
    return this.patientMeasurementService.findAll(body.where);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.patientMeasurementService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.patientMeasurementService.update(+id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.patientMeasurementService.remove(id);
  }
}
