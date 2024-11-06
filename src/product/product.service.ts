import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ProductService {
  constructor (@InjectRepository(Product)
private productRepository:Repository<Product>
){}


 async create(createProductDto: CreateProductDto) {
    const prod=this.productRepository.create(createProductDto);
    return await this.productRepository
    .createQueryBuilder()
    .insert()
    .into(Product)
    .values({
      prod_name:createProductDto.prod_name,
      base_price:createProductDto.base_price,
      black_crewneck_price:createProductDto.black_crewneck_price,
      white_crewneck_price:createProductDto.white_crewneck_price,
      white_hoodie_price:createProductDto.white_hoodie_price,
      black_hoodie_price:createProductDto.black_hoodie_price,
      color:createProductDto.color,
      type:createProductDto.type,
      category:{
        id :createProductDto.categoryId
      },
      user :{
        id :createProductDto.userId
      }
    })
    .execute();
  }

  findAll() {
    return this.productRepository.find();
  }

   async querybuilder(qq:string) {
     return this.productRepository.createQueryBuilder(qq); 
  }
  findOne(id: number) {
    return this.productRepository.findOneBy({id});
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    /* const prod= await this.productRepository.findOneBy({id});
    Object.assign(prod,updateProductDto); */
    return await this.productRepository
    .createQueryBuilder()
    .update(Product)
    .set({
      prod_name:updateProductDto.prod_name,
      base_price:updateProductDto.base_price,
      black_crewneck_price:updateProductDto.black_crewneck_price,
      white_crewneck_price:updateProductDto.white_crewneck_price,
      white_hoodie_price:updateProductDto.white_hoodie_price,
      black_hoodie_price:updateProductDto.black_hoodie_price,
      color:updateProductDto.color,
      type:updateProductDto.type,
      category:{
        id :updateProductDto.categoryId
      },
      user :{
        id :updateProductDto.userId
      }
    })
    .where("id=:id",{id:id})
    .execute();
  }

  async remove(id: number) {
    const prod= await this.productRepository.findOneBy({id});
    return await this.productRepository.remove(prod);
  }

  find(options) {
    return this.productRepository.find(options);
  }

  async paginationFunc(page: number = 1, limit: number = 3) {
    const skip = (page - 1) * limit;
    return this.productRepository.find({
        skip,
        take: limit,
    });
}
}
