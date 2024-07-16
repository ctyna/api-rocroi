const { Usuario } = require("../models/models")


// Login del usuario

const postLogin = async (req, res, next) => {
    try {

        const { username, pass } = req.body

        const buscar = await Usuario.findOne({ username, pass })

        buscar
            ? res.json({ login: true })
            : res.json({ login: false })


    } catch (error) {
        next({ statusText: error.message })

    }
}


module.exports = {
    postLogin,
    
}