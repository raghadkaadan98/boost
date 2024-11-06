import { equals, isAlpha, IsNotEmpty, IsNumber, IsString, MinLength ,ValidatorOptions} from "class-validator";

export class CreateProductDto {
    @IsNotEmpty({message:'Name can not be empty'})
    @IsString({message:'Name should be string'})
        prod_name:string;
        @IsNotEmpty({message:'Name can not be empty'})
        @IsNumber()
        base_price:number;
        @IsNotEmpty()
        userId:number;
        @IsNotEmpty()
        categoryId:number;
         @IsNotEmpty()
        white_crewneck_price:number;
        @IsNotEmpty()
        white_hoodie_price:number;
        @IsNotEmpty()
        black_crewneck_price:number;
        @IsNotEmpty()
        black_hoodie_price:number;
         @IsNotEmpty()
        color:string ;
        @IsNotEmpty()
        type:string;
         
}
