import { Category } from '../../../model/category'
import { IcategoryRepository} from '../../../repositories/ICategoryRepository'

class listCategoriesUseCase{

    constructor(private categoriesRepository:IcategoryRepository){
    }
    execute(): Category[]{
        const categories = this.categoriesRepository.list()
       
        return categories
    }
}

export {listCategoriesUseCase}