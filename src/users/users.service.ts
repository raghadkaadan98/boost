import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity'



@Injectable()
export class UsersService {
  constructor (@InjectRepository(UserEntity)
private usersRepository:Repository<UserEntity>
){}


async signup(body:any){
const user=this.usersRepository.create(body);
return await this.usersRepository.save(user);
}

async create(createUserDto: CreateUserDto) {
    const user=this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  findOne(id: any) {
    return this.usersRepository.findOneBy({id});
  }
  findUser(email: string ,password :string) {
    return this.usersRepository.findOneBy({email,password});
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user= await this.usersRepository.findOneBy({id});
    Object.assign(user,updateUserDto);
    return await this.usersRepository.save(user);
  }

  async remove(id: number) {
    const user= await this.usersRepository.findOneBy({id});
    return await this.usersRepository.remove(user);
  }
 
}
