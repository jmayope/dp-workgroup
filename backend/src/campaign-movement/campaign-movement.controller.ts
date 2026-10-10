import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { CampaignMovementService } from './campaign-movement.service';

@Controller('campaign-movement')
export class CampaignMovementController {
  constructor(private readonly campaignMovementService: CampaignMovementService) {}

  @Post()
  create(@Body() body: any) {
    return this.campaignMovementService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any) {
    return this.campaignMovementService.findAll(body.where);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.campaignMovementService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.campaignMovementService.update(+id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.campaignMovementService.remove(id);
  }
}
