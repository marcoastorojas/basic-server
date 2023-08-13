const { Router } = require("express")
const authRouter = Router()


authRouter.post("/", (_req,res)=>{
    res.send("nuevo usuario")
})
authRouter.post("/new",(_req,res)=>{
    res.send("Crear token")
})
authRouter.get("/renew",(_req,res)=>{
    res.send("renovar token")
})
module.exports = authRouter