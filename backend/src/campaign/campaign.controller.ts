import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CampaignService } from './campaign.service';

@Controller('campaign')
export class CampaignController {
  constructor(private readonly campaignService: CampaignService) {}

  @Post()
  create(@Body() body: any) {
    return this.campaignService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any) {
    return this.campaignService.findAll(body.where);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.campaignService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.campaignService.update(id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.campaignService.remove(id);
  }
}
