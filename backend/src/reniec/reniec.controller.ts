import { Controller, Get, Param } from '@nestjs/common';
import { ReniecService } from './reniec.service';

@Controller('reniec')
export class ReniecController {
  constructor(private readonly reniecService: ReniecService) {}

  @Get('dni/:dni')
  async findDNI(@Param('dni') dni: string) {
    return await this.reniecService.findDNI(dni);
  }
}
