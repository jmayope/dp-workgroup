import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { HealthNetworkService } from './health-network.service';

@Controller('health-network')
export class HealthNetworkController {
  constructor(private readonly healthNetworkService: HealthNetworkService) {}

  @Post()
  create(@Body() body: any) {
    return this.healthNetworkService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any) {
    return this.healthNetworkService.findAll(body.where);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.healthNetworkService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.healthNetworkService.update(id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.healthNetworkService.remove(id);
  }
}
