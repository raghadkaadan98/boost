import { Injectable } from '@nestjs/common';
import { GlobalLogger } from './logger/logger.service'
@Injectable()
export class AppService {
  constructor(private logger: GlobalLogger ) {}
  getHello(): string {
    
    this.logger.log('This is a Global log message.');
        return 'Hello Worlddddddd!';
  }
}


