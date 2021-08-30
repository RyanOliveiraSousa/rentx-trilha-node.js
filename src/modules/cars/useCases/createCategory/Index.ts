import { CategoriesRepository } from "../../repositories/Implementations/CategoryRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default():CreateCategoryController =>{



    const categoryRepository = null
    const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository)
    const createCategoryController = new CreateCategoryController(createCategoryUseCase)
    
    return createCategoryController
    

    
}
