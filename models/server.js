const express = require("express")
const cors = require("cors")
const authRouter = require("../routes/authRoutes")
const path = require("path")
const morgan = require("morgan")

class Server {

    constructor() {
        this.PORT = process.env.PORT
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
        this.app.get("/", (req,res)=>{return res.send("hola todo esta bien mal")})
        this.app.use("/auth", authRouter)
    }

}

module.exports = Server