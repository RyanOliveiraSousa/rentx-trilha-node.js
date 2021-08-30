import { Category } from "../entities/category";


interface ICreateCategoryTDO{

    name:string
    description:string
}

interface IcategoryRepository {
    findByName(name: string):Promise<Category>
    list():Promise<Category[]>
    create({name,description}:ICreateCategoryTDO):Promise<void>

}

export { IcategoryRepository}
export {ICreateCategoryTDO}