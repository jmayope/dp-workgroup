import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Headers } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() body: any) {
    return this.productService.create(body);
  }

  @Post('where')
  findAll(@Body() body: any) {
    return this.productService.findAll(body.where);
  }

  @Post('quantity')
    getQuantity(@Headers() headers, @Body() body: any) {
      if (headers['app-type']) {
        body.where = {
          $or: [
            {
              code: {$regex: body.text, $options: 'i'}
            },
            {
              name: {$regex: body.text, $options: 'i'}
            },
            {
              description: {$regex: body.text, $options: 'i'}
            },
            {
              provider: {$regex: body.text, $options: 'i'}
            }
          ]
        }
      }
      return this.productService.getQuantity(body.where);
    }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.productService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.productService.update(id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.productService.remove(id);
  }
}
