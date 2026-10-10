import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { ProfileMenuService } from './profile-menu.service';

@Controller('profile-menu')
export class ProfileMenuController {
  constructor(private readonly profileMenuService: ProfileMenuService) {}

  @Post()
  create(@Body() body: any) {
    return this.profileMenuService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any, @Query() query) {
    return this.profileMenuService.findAll(body.where, query);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.profileMenuService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.profileMenuService.update(+id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.profileMenuService.remove(id);
  }
}
