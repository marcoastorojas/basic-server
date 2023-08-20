import Crud from "../../../../core/domain/repository/CrudInterface";
import {  ObjectListResponse } from "../../../../core/domain/repository/ResponseTypes";
import { User } from "../entity/User";

export default interface UserRepositoryInterface extends Crud<User,String>{
    getAllUsers():Promise<ObjectListResponse<User>>
}