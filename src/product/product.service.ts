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
    return await this.productRepository.save(prod);
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
    const prod= await this.productRepository.findOneBy({id});
    Object.assign(prod,updateProductDto);
    return await this.productRepository.save(prod);
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
