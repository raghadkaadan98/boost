import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Req } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Or, Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { console } from 'inspector';
import { Request } from 'express';
import { Console } from 'console';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }
  @Get('search')
 async  getProduct(@Query('name') name: string,
                   @Query('min') min: number,
                   @Query('max') max: number,
                   @Query('color') color: number,
                   @Query('type') type: number
                  ){
   
   const builder=await this.productService.querybuilder('product'); 

    builder.where("product.prod_name LIKE :name", { name: `%${name}%` })
            .orWhere("product.color LIKE :color", { color: `%${color}%` })
            .orWhere("product.type LIKE :type", { type: `%${type}%` })
            .orWhere("product.base_price BETWEEN :min AND :max", { min: min, max: max })        
   return await builder.getRawMany();  
 
}
@Get('pagination')
async pagination(@Query('page') page: number, @Query('limit') limit: number) {
    return this.productService.paginationFunc(page, limit);
}


  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }

  

  /* @Get('query')
  async searchh(@Req() req:Request){
    let options={}
    if(req.query.s){
      options={
        $or:[
          {prod_name :new RegExp(req.query.s.toString(),'i'),
            color :new RegExp(req.query.s.toString(),'i'),
            type :new RegExp(req.query.s.toString(),'i')
          }
        ]
      }

    }
    const query=await this.productService.find(options);
    return query;
  } */
}
