import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { GrowthStageService } from './growth-stage.service';

@Controller('growth-stage')
export class GrowthStageController {
  constructor(private readonly growthStageService: GrowthStageService) {}

  @Post()
  create(@Body() body: any) {
    return this.growthStageService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any) {
    return this.growthStageService.findAll(body.where);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.growthStageService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.growthStageService.update(id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.growthStageService.remove(id);
  }
}
