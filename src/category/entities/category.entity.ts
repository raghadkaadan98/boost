import { Product } from "src/product/entities/product.entity";
import { Column,Double,Entity, PrimaryGeneratedColumn ,OneToMany} from "typeorm";
@Entity('category')

export class Category {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    categ_name:string
    @OneToMany(() => Product, (product) => product.category)
    
     product: Product[]
}
