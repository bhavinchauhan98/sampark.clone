import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YouthModule } from './youths/youths.module';

@Module({
  imports: [YouthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
