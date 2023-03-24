import { Controller, Get } from '@nestjs/common';
import { YouthService } from './youths.service';

@Controller('/youths')
export class YouthController {
  constructor(private readonly youthService: YouthService) {}

  @Get()
  getHello(): string {
    return this.youthService.getHello();
  }
}
