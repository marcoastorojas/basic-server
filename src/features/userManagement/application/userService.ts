import Response from "../../../core/domain/entity/Response";
import { ResponseWithObjects } from "../../../core/domain/repository/ResponseTypes";
import { User } from "../domain/entity/User";
import UserRepositoryInterface from "../domain/repository/UserRepositoryInterface";
import { UserServiceInterface } from "../domain/service/UserServiceInterface";

export default class UserService implements UserServiceInterface {
    userRepository: UserRepositoryInterface;
    constructor(userRepository:UserRepositoryInterface){
        this.userRepository = userRepository;
    }
    
    //Casos de uso 
    async getAllUsers(): Promise<ResponseWithObjects<User>> {
        try {
            return this.userRepository.getAllUsers();
            
        } catch (error ) {
            return {response:new Response((error as Error).message,500),objects:[]};
        }
    }
    

}