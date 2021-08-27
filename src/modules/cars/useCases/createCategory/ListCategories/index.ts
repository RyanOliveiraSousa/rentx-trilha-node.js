import { CategoriesRepository } from "../../../repositories/Implementations/CategoryRepository";
import { listCategoriesController } from "./ListCategoriesController";
import { listCategoriesUseCase } from "./ListCategoriesUseCase";
const categoriesRepository = CategoriesRepository.getInstance()
const listcategoriesuseCase = new listCategoriesUseCase(categoriesRepository)
const listcategoriesController = new listCategoriesController(listcategoriesuseCase)

export { listcategoriesuseCase, listcategoriesController}