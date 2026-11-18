import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { AnthropometricMeasurementService } from './anthropometric-measurement.service';

@Controller('anthropometric-measurement')
export class AnthropometricMeasurementController {
  constructor(private readonly anthropometricMeasurementService: AnthropometricMeasurementService) {}

  @Post()
  create(@Body() body: any) {
    return this.anthropometricMeasurementService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any) {
    return this.anthropometricMeasurementService.findAll(body.where);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.anthropometricMeasurementService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.anthropometricMeasurementService.update(id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.anthropometricMeasurementService.remove(id);
  }
}
