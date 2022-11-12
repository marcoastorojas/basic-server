const express = require("express")
const cors = require("cors")
const authRouter = require("../routes/authRoutes")
const path = require("path")
const dietRouter = require("../routes/dietRoutes")
const { connectPostgres } = require("../config/db")
const recipeRouter = require("../routes/recipeRouter")
const morgan = require("morgan")

class Server {

    constructor() {
        this.PORT = process.env.PORT
        this.app = express()
        this.middlewares()
    }
    
    async listen() {
        try {
            await connectPostgres
            this.app.listen(this.PORT, () => {
                console.log(`servidor corriendo en el puerto ${this.PORT}`)
            })
        } catch (error) {
            console.log(error)
        }
        
    }
    
    middlewares() {
        this.app.use(express.static("public"))
        this.app.use(express.json())
        this.app.use(morgan('dev'));
        this.app.use(cors())
        this.routes()
        this.app.get("*", (req, res) => {
            res.sendFile(path.resolve(__dirname, "../public/index.html"))
        })
    }
    routes() {
        this.app.use("/auth", authRouter)
        this.app.use("/diet", dietRouter)
        this.app.use("/recipe", recipeRouter)
    }

}

module.exports = Server