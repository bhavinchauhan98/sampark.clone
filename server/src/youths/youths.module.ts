import { Module } from '@nestjs/common';
import { YouthController } from './youths.controller';
import { YouthService } from './youths.service';

@Module({
  imports: [],
  controllers: [YouthController],
  providers: [YouthService],
})
export class YouthModule {}
