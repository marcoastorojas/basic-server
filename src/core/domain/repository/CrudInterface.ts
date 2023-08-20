import {  SingleObjectResponse } from "./ResponseTypes"

export default interface Crud <type,typeid>{
    create( newOne:type ): Promise<SingleObjectResponse<type>>
    getOne(id:typeid):Promise<SingleObjectResponse<type>>
    delete(id:typeid):Promise<SingleObjectResponse<null>>
    modify(current: type):Promise<SingleObjectResponse<type>>
}



