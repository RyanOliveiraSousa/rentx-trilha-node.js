import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string
    description: string
}

class CreateSpecificationUseCase{
    constructor( private specificationsRepository : ISpecificationRepository){


    }
    execute({name, description}:IRequest) :void{
        const specificationAlreadyExist = this.specificationsRepository.findByName(name)

        if(specificationAlreadyExist){

            throw new Error("Specification already exist")
        }
          this.specificationsRepository.create({
              name,
              description
          })

    }

}


export { CreateSpecificationUseCase}