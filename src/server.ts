import  express  from "express";
const cors = require("cors")
import UserControllerFactory from "./core/infrastructure/factory/controllerFactory/UserControllerFactory";
const morgan = require("morgan")
const dotenv = require("dotenv")

export default class Server {
    public PORT:number;
    private app:express.Application;

    constructor() {
        this.PORT = Number(process.env.PORT) || 3000;
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
        this.app.get("/",(_req,res)=>{res.json("hola mundo")})
        const userController = new UserControllerFactory().create()
        this.app.use("/user", userController.router);
    }

}
