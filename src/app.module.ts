import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { UsersModule } from './users/users.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { LoggerModule } from './logger/logger.module';
@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), UsersModule, ProductModule, CategoryModule,LoggerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
 
}
