import { request, response, Router } from 'express'
import {v4 as uuidv4} from 'uuid'
import multer from 'multer'

import { CategoriesRepository } from '../modules/cars/repositories/Implementations/CategoryRepository'

import { createCategoryController } from '../modules/cars/useCases/createCategory/Index'
import { listcategoriesController } from '../modules/cars/useCases/createCategory/ListCategories'
import { listCategoriesController } from '../modules/cars/useCases/createCategory/ListCategories/ListCategoriesController'
import { importCategoryController} from '../modules/cars/useCases/importCategory'

const categoriesRoutes = Router()
const categoriesRepository =  CategoriesRepository.getInstance()
// foi passado para o categoryrepository
//const categories: Category[] = []

const upload = multer({
    dest:"./tmp",

})

categoriesRoutes.post("/", ( request, response) =>{

   return createCategoryController.handle(request,response)
})
categoriesRoutes.get("/", (request, response) =>{

    return listcategoriesController.handle(request,response)
})
categoriesRoutes.post("/import",upload.single("file"), (request,response)=>{

    return importCategoryController.handle(request,response)
})

export { categoriesRoutes }