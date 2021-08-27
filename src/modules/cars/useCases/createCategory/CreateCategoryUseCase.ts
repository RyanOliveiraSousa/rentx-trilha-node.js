
import { IcategoryRepository } from "../../repositories/ICategoryRepository"

interface IRequest {

    name: string,
    description: string
}
/**
 *  [] Definir o tipo de retorno
 *  [] Alterar o retorno de erro
 *  [] Acessar o repositorio
 *  [] Retornar algo
 */ 
class CreateCategoryUseCase {
    constructor(private categoriesRepository:IcategoryRepository){



    }
    execute({name, description}:IRequest): void{

        const categoriesAlreadyExist = this.categoriesRepository.findByName(name)
        if(categoriesAlreadyExist){

          throw new Error("Category already exist")
        }
        this.categoriesRepository.create({name,description})

    }
}



export { CreateCategoryUseCase}
