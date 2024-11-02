import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerOptions = new DocumentBuilder()
  .setTitle('Your API Title')
  .setDescription('API description')
  .setVersion('1.0')
  .build();