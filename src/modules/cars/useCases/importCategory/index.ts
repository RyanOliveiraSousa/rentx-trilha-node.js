import { CategoriesRepository } from "../../repositories/Implementations/CategoryRepository"
import { ImportCategoryController } from "./ImportCategoryController"
import { ImportCategoryUseCase } from "./ImportCategoryUseCase"

const categoriesRepository = null
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository)
const importCategoryController = new ImportCategoryController(importCategoryUseCase)

export { importCategoryController }