import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';  
import { DocumentBuilder ,SwaggerModule } from '@nestjs/swagger';  

import * as cookieParser from "cookie-parser";
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
/*   app.use(cookieParser);
 */  app.useGlobalPipes(new ValidationPipe({whitelist:true}));
/*   app.enableCors({origin:"http//localhost:3000", credentials:true})
 */  
 const options=new DocumentBuilder()
 .setTitle("API Swagger")
 .setDescription("Demo Swagger")
 .setVersion("1.0.0")
 .build()

 const document=SwaggerModule.createDocument(app,options);
 SwaggerModule.setup('api',app,document)

 await app.listen(3000);
}
bootstrap();
