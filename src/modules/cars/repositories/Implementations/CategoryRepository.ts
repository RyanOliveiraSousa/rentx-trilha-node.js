import { getRepository, Repository } from "typeorm"
import { Category} from "../../entities/category"
import { IcategoryRepository, ICreateCategoryTDO } from "../ICategoryRepository"

//DTO == Data transfer object

class CategoriesRepository implements IcategoryRepository{

    private repository: Repository<Category>
    //Singleton
 
     constructor(){
        this.repository = getRepository(Category)

    }
  

   async create( {description, name}: ICreateCategoryTDO):Promise<void>{
        const category = this.repository.create({
            name,
            description
        })
        
        await this.repository.save(category)
    }


    async list():Promise<Category[]>{

        const categories = await this.repository.find()
        return categories
    }
    async findByName(name: string):Promise<Category>{

       const category = await this.repository.findOne({name})
       return category
    }
}

export { CategoriesRepository}