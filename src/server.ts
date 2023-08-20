import  express  from "express";
const cors = require("cors")
import UserController from "./features/userManagement/infrastructure/controllers/UserController";
import userService  from "./features/userManagement/application/userService";
import UserRepository from "./features/userManagement/infrastructure/repository/UserRepository";
import UserControllerFactory from "./core/infrastructure/factory/controllerFactory/UserControllerFactory";
const morgan = require("morgan")

export default class Server {
    public PORT:number;
    private app:express.Application;

    constructor() {
        this.PORT = 3000
        this.app = express()
        this.middlewares()
    }
    
    async listen() {
        try {
            this.app.listen(this.PORT, () => {
                console.log(`servidor corriendo en el puerto ${this.PORT}`)
            })
        } catch (error) {
            console.log(error)
        }
        
    }
    
    middlewares() {
        this.app.use(express.json())
        this.app.use(morgan('dev'));
        this.app.use(cors())
        this.routes()
    }
    routes() {
        const userController = new UserControllerFactory().create()
        this.app.use("/user", userController.router);
    }

}
