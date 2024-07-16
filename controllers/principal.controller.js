const {Actividad} = require("../models/models")

const getActividad = ( async ( req , res , next)=>{
    try{
        const buscar = await Actividad.find()
        res.status(200).json(buscar)
    }
    catch (error) {
        next({ statusText: error.message })

    }
})


module.exports = {
    getActividad
}