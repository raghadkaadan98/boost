import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor (@InjectRepository(Category)
private categoryRepository:Repository<Category>
){}
  async create(createCategoryDto: CreateCategoryDto) {
    const categ=this.categoryRepository.create(createCategoryDto);
    return await this.categoryRepository.save(categ);
  }

  findAll() {
    return this.categoryRepository.find({
      relations: {
          product: true,
      },
  });

  }

  findOne(id: number) {
    return this.categoryRepository.findOneBy({id});
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const categ= await this.categoryRepository.findOneBy({id});
    Object.assign(categ,updateCategoryDto);
    return await this.categoryRepository.save(categ);  }

  async remove(id: number) {
    const categ= await this.categoryRepository.findOneBy({id});
    return await this.categoryRepository.remove(categ);  }
}
