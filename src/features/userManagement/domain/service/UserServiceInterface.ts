import { ObjectListResponse } from "../../../../core/domain/repository/ResponseTypes";
import { User } from "../entity/User";
import UserRepositoryInterface from "../repository/UserRepositoryInterface";

export interface UserServiceInterface {
    userRepository:UserRepositoryInterface
    getAllUsers():Promise<ObjectListResponse<User>>
}