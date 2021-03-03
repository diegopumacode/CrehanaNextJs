import { ICategory } from "./ICategory";
import { ILevel } from "./ILevel";

export interface ICourse {
    _typename:string
    id:string    
    name:string
    users:number
    realPrice:number
    price:number
    courseScore:number
    level:ILevel
    category:ICategory
    subCategory:ICategory
}