

const validateNEwUser = (req, res, next) => {
    const { email = "", password = "" } = req.body
    const noErrors = { email: "", password: "" }
    let errors = { ...noErrors }

    let re = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/g
    if (!email.match(re)) { errors.email = "el email deve ser valido" }
    if (password.length < 8) { errors.password = "la contraseña no deve ser menos de 8 caracteres" }

    if (!email) { errors.email = "el email es obligatorio" }
    if (!password) { errors.password = "el password es obligatorio" }

    if (JSON.stringify(noErrors) !== JSON.stringify(errors)) {
        //elimina los errores vacios responseErrors y los envia en el response
        const responseErrors = Object.entries(errors) // [["email","el password deve ser valido"],["password":""]]
                                .filter(([key, value]) => value) //[["email","el password deve ser valido"],...]
                                .reduce((acc,cur)=>({...acc,[cur[0]]:cur[1]}),{}) // {email:"el password deve ser valido"}
        return res.status(400).json({ errors:responseErrors })
    }
    next()

}
module.exports = {
    validateNEwUser
}