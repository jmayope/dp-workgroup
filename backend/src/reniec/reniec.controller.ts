import { Controller, Get, Param } from '@nestjs/common';
import { ReniecService } from './reniec.service';
import { Public } from 'src/common/decorators/public.decorator';

@Controller('reniec')
export class ReniecController {
  constructor(private readonly reniecService: ReniecService) {}

  @Public()
  @Get('dni/:dni')
  async findDNI(@Param('dni') dni: string) {
    return await this.reniecService.findDNI(dni);
  }
}
