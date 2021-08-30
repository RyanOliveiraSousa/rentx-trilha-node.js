import { request, response, Router } from 'express'

import multer from 'multer'



import createCategoryController  from '../modules/cars/useCases/createCategory/Index'
import { listcategoriesController } from '../modules/cars/useCases/createCategory/ListCategories'
import { importCategoryController} from '../modules/cars/useCases/importCategory'

const categoriesRoutes = Router()

// foi passado para o categoryrepository
//const categories: Category[] = []

const upload = multer({
    dest:"./tmp",

})

categoriesRoutes.post("/", ( request, response) =>{
    console.log("reload funcionando")
   return createCategoryController().handle(request,response)
})
categoriesRoutes.get("/", (request, response) =>{

    return listcategoriesController.handle(request,response)
})
categoriesRoutes.post("/import",upload.single("file"), (request,response)=>{

    return importCategoryController.handle(request,response)
})

export { categoriesRoutes }
