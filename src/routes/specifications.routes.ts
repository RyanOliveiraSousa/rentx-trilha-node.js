import { response, Router } from "express";
import { SpecificationRepository } from "../modules/cars/repositories/Implementations/SpecificationRepository";
import { CreateSpecificationUseCase } from "../modules/cars/useCases/createSpecification/CreateSpecificationUseCase";
import { createSpecificationController} from "../modules/cars/useCases/createSpecification/index"

const specificationRoutes = Router()

const specificationRepository = new SpecificationRepository()

specificationRoutes.post("/", (request, response) =>{

   return createSpecificationController.handle(request, response)


})
export {specificationRoutes}