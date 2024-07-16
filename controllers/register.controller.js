const { Usuario } = require("../models/models")

// Registrar un nuevo usuario
const postUser = async (req, res, next) => {
    try {
        const { username, pass } = req.body
        const nueva = new Usuario({ username, pass })

        await nueva.save()
        res.status(201).json(nueva)
    }
    catch {
        next({ statusText: error.message })
    }


}


module.exports = {

    postUser
}