import Response from "../../../../core/domain/entity/Response";
import {  ObjectListResponse, SingleObjectResponse } from "../../../../core/domain/repository/ResponseTypes";
import { User } from "../../domain/entity/User";
import UserRepositoryInterface from "../../domain/repository/UserRepositoryInterface";

export default class UserRepository implements UserRepositoryInterface{
    private users:User[] = [
        new User("1","user1","user1@gmail.com","123456"),
        new User("2","user2","user2@gmail.com","123456"),
        new User("3","user3","user3@gmail.com","123456"),
        new User("4","user4","user4@gmail.com","123456"),
        new User("5","user5","user5@gmail.com","123456"),
        new User("6","user6","user6@gmail.com","123456"),
    ]
    
    
    async getAllUsers(): Promise<ObjectListResponse<User> >{
        try {
            const usuarios = this.users;
            if(usuarios.length){
                return {response:new Response("todo llevo bien",200), data: usuarios}
            }
            
            return {response:new Response("No existe usuarios",400), data: usuarios}
        } catch (error) {
            return {response:new Response((error as Error).message,500), data: []}
        }
    }
    
    create(newOne: User): Promise<SingleObjectResponse<User>> {
        throw new Error("Method not implemented.");
    }
    getOne(id: String): Promise<SingleObjectResponse<User>> {
        throw new Error("Method not implemented.");
    }
    delete(id: String): Promise<SingleObjectResponse<null>> {
        throw new Error("Method not implemented.");
    }
    modify(current: User): Promise<SingleObjectResponse<User>> {
        throw new Error("Method not implemented.");
    }

}