import { SpecificationRepository } from "../../repositories/Implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

const specificationRepository = new SpecificationRepository()
const createspecificationUseCase = new CreateSpecificationUseCase(specificationRepository)
const createSpecificationController = new CreateSpecificationController(createspecificationUseCase)

export{ createSpecificationController}