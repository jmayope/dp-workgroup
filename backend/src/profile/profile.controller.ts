import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Post()
  create(@Body() body: any) {
    return this.profileService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any) {
    return this.profileService.findAll(body.where);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.profileService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.profileService.update(id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.profileService.remove(id);
  }
}
