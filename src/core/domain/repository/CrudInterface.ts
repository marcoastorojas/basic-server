import { ResponseWithObject, ResponseOnly } from "./ResponseTypes"

export default interface Crud <type,typeid>{
    create( newOne:type ): Promise<ResponseWithObject<type>>
    getOne(id:typeid):Promise<ResponseWithObject<type>>
    delete(id:typeid):Promise<ResponseOnly>
    modify(current: type):Promise<ResponseWithObject<type>>
}



