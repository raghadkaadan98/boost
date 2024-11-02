import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
export class CreateUserDto {
@IsNotEmpty({message:'Name can not be empty'})
@IsString({message:'Name should be string'})
    name:string;
@IsNotEmpty({message:'email can not be empty'})
@IsEmail({},{message:'Name should be string'})
    email:string;
@IsNotEmpty({message:'password can not be empty'})
@MinLength(5,{message:'minimum lenghtis 3'})
    password:string;
@IsNotEmpty({message:'roles can not be empty'})
@IsString({message:'roles should be string'})
    roles:string;

}
