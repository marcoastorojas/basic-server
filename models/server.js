const express = require("express")
const cors = require("cors")
const authRouter = require("../routes/authRoutes")

class Server {

    constructor() {
        this.PORT = process.env.PORT
        this.app = express()
        this.middlewares()
    }

    listen() {
        this.app.listen(this.PORT, () => {
            console.log(`servidor corriendo en el puerto ${this.PORT}`)
        })
    }

    middlewares(){
        this.app.use(express.json())
        this.app.use(cors())
        this.routes()
    }
    routes(){
        this.app.use("/auth", authRouter)
    }

}

module.exports = Server