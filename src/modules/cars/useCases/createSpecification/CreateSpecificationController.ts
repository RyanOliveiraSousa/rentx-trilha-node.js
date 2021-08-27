import { Request, Response} from 'express'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

class CreateSpecificationController{

    constructor(private createSpecificatieUseCase: CreateSpecificationUseCase){

    }

    handle(request: Request, response: Response){

        const { name, description }= request.body
        
    
        this.createSpecificatieUseCase.execute({name,description})
    
        return response.status(201).send()
    }
}

export {CreateSpecificationController}