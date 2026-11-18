import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() body: any) {
    return this.menuService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any, @Query() query) {
    return this.menuService.findAll(body.where, query);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.menuService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.menuService.update(id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.menuService.remove(id);
  }
}
