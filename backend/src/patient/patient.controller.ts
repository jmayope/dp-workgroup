import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseInterceptors, UploadedFile, Headers } from '@nestjs/common';
import { PatientService } from './patient.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { URI_FILES } from 'src/constants';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  create(@Body() body: any) {
    return this.patientService.create(body);
  }

  @Post('where')
  findAll(@Headers() headers, @Body() body: any) {
    if (headers['app-type']) {
      body.pagination = JSON.parse(body.pagination);
      body.where = {
        $or: [
          {
            code: {$regex: body.text, $options: 'i'}
          },
          {
            paternalSurname: {$regex: body.text, $options: 'i'}
          },
          {
            maternalSurname: {$regex: body.text, $options: 'i'}
          },
          {
            firstName: {$regex: body.text, $options: 'i'}
          }
        ]
      }
    }
    return this.patientService.findAll(body.where, body.pagination);
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
            paternalSurname: {$regex: body.text, $options: 'i'}
          },
          {
            maternalSurname: {$regex: body.text, $options: 'i'}
          },
          {
            firstName: {$regex: body.text, $options: 'i'}
          }
        ]
      }
    }
    return this.patientService.getQuantity(body.where);
  }

  @Post('export')
  export(@Body() body: any) {
    return this.patientService.export(body.where);
  }

  @Post('migrate')
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: URI_FILES,
      filename: (req, file, cb) => {
        cb(null, `${Date.now()}.${file.originalname.substring(6).split('.')[1]}`);
      }
    })
  }
))
  migrate(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return this.patientService.migrate(file);
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.patientService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: any, @Body() body: any) {
    return this.patientService.update(id, body.updated);
  }

  @Delete(':id')
  remove(@Param('id') id: any) {
    return this.patientService.remove(id);
  }
}
