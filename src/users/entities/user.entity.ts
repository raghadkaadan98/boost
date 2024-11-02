import { Column, Entity, PrimaryGeneratedColumn ,OneToMany} from "typeorm";
import { Product } from "src/product/entities/product.entity";

@Entity('users') 
export class UserEntity {
@PrimaryGeneratedColumn()
id:number;
@Column()
name:string;
@Column()
email:string;
@Column()
password:string
@Column()
roles:string

@OneToMany(() => Product, (product) => product.user)
product: Product[]
}
