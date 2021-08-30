import fs from 'fs'
import csvParse from "csv-parse"
import parse from 'csv-parse'
import { IcategoryRepository } from '../../repositories/ICategoryRepository'
import { Category } from '../../entities/category'

interface IImportCategory{
    name:string
    description:string
}

class ImportCategoryUseCase{

    constructor(private categoriesRepository: IcategoryRepository){}

    LoadCategories(file: Express.Multer.File): Promise<IImportCategory[]>{
       return new Promise((resolve, reject) =>{
        const stream = fs.createReadStream(file.path)
        const categories: IImportCategory[] = []


        const parseFile = csvParse()

        stream.pipe(parseFile)

        parseFile.on("data", async(line) =>{
         
            const [name,description] = line
            categories.push({
                name,
                description
            })
        })
        .on("end", () =>{
            fs.promises.unlink(file.path)
            resolve(categories)
        })
        .on("error", (err) =>{
            reject(err)
        })
       })
    }
   async execute(file: Express.Multer.File): Promise<void>{
        const categories = await this.LoadCategories(file)
       
        categories.map( async (category) => {

            const {name, description} = category

            const existCategory = this.categoriesRepository.findByName(name)

            if(!existCategory){

                this.categoriesRepository.create({
                    name,
                    description
                })
            }
        })
       
    }
}
export { ImportCategoryUseCase}