import { Category} from "../../model/category"
import { IcategoryRepository, ICreateCategoryTDO } from "../ICategoryRepository"

//DTO == Data transfer object

class CategoriesRepository implements IcategoryRepository{

   private  categories: Category[]
    //Singleton
   private static INSTANCE: CategoriesRepository
    private constructor(){
        this.categories = []

    }
    public static getInstance():CategoriesRepository{
        if(!CategoriesRepository.INSTANCE){

            CategoriesRepository.INSTANCE = new CategoriesRepository()
        }
         return CategoriesRepository.INSTANCE   
    }

    create( {description, name}: ICreateCategoryTDO):void{
        
    const category = new Category()
    
    Object.assign(category, {
        name,
        description,
        created_at: new Date()
    })
    
    this.categories.push(category)
    }


    list(): Category[]{

        return this.categories
    }
    findByName(name: string): Category{

        const category = this.categories.find((category) => category.name === name)
        return category
    }
}

export { CategoriesRepository}