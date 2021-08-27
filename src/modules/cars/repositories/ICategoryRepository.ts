import { Category } from "../model/category";


interface ICreateCategoryTDO{

    name:string
    description:string
}

interface IcategoryRepository {
    findByName(name: string): Category
    list(): Category[]
    create({name,description}:ICreateCategoryTDO)

}

export { IcategoryRepository}
export {ICreateCategoryTDO}