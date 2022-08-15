
const { request, response } = require("express")

const addNewUser = (req = request, res = response) => {
    
    res.status(201).json(req.body)
}

const verifyUser = (req = request, res = response) => {
    res.send("verificar usuarios")
}
const revalidToken = (req = request, res = response) => {
    res.send("revalidando el token para dejar pasar sin loguearse")
}
module.exports = {
    addNewUser,
    verifyUser,
    revalidToken
}