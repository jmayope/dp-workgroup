import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ServiceDeliveryInstitutionService } from './service-delivery-institution.service';

@Controller('service-delivery-institution')
export class ServiceDeliveryInstitutionController {
  constructor(private readonly serviceDeliveryInstitutionService: ServiceDeliveryInstitutionService) {}

  @Post()
  create(@Body() body: any) {
    return this.serviceDeliveryInstitutionService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any) {
    return this.serviceDeliveryInstitutionService.findAll(body.where);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.serviceDeliveryInstitutionService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.serviceDeliveryInstitutionService.update(id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.serviceDeliveryInstitutionService.remove(id);
  }
}
