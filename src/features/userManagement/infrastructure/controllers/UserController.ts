import Controller from "../../../../core/infrastructure/ControllerInterface";
import { UserServiceInterface } from "../../domain/service/UserServiceInterface";
import { Router } from 'express';


export default class UserController implements Controller{
    router:Router;
    userService:UserServiceInterface;
    constructor(userService:UserServiceInterface){
        this.userService = userService;
        this.router = Router();
        this.routes();
    }
    
    public routes(){
        this.router.get("/all",async(_req,res)=>{
            const response = await this.userService.getAllUsers();
            res.status(response.response.status).json(response);
        })
    }


}