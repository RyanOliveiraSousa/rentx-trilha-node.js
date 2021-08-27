import { Request, Response} from 'express'
import { listCategoriesUseCase} from './ListCategoriesUseCase'

class listCategoriesController{

    constructor(private listCategoriesUseCase: listCategoriesUseCase){}
    handle(request:Request, response:Response): Response {

        
        const all = this.listCategoriesUseCase.execute()

        return response.json({all})
}
    
}

export{listCategoriesController}