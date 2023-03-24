import { Injectable } from '@nestjs/common';

@Injectable()
export class YouthService {
  getHello(): string {
    return 'youths API';
  }
}
