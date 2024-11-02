import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { GlobalLogger } from './logger/sharedmmodule.module';
import { console } from 'inspector';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private logger: GlobalLogger) {}

  @Get()
  getHello(): string {
    this.logger.log('This is a log message.');
    console.log('This is a log message.')
    return this.appService.getHello();
  }
}
