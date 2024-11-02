import { Column,Double,Entity, PrimaryGeneratedColumn ,ManyToOne} from "typeorm";
import { UserEntity } from "src/users/entities/user.entity";
import { Category } from "src/category/entities/category.entity";
@Entity('product') 
export class Product {
@PrimaryGeneratedColumn()
id:number;
@Column()
prod_name:string
@Column()
base_price:number
@Column()
white_crewneck_price:number
@Column()
white_hoodie_price:number
@Column()
black_crewneck_price:number
@Column()
black_hoodie_price:number
@Column()
color:string
@Column()
type:string

    @ManyToOne(() => UserEntity, (user) => user.product)
    
    user: UserEntity

    @ManyToOne(() => Category, (category) => category.product)
    category :Category
}
