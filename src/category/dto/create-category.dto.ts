import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateCategoryDto {
   
    @IsNotEmpty({message:'Name can not be empty'})
    @IsString({message:'Name should be string'})
    categ_name:string
}
