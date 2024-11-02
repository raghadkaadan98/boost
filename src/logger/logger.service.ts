import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class GlobalLogger extends Logger {
  log(message: string) {
    super.log(message);
    // You can customize logging further here, like sending logs to external services or files.
  }

  error(message: string, trace: string) {
    super.error(message, trace);
    // Handle error logging and tracing as needed.
  }
}