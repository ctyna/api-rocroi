const { Rafting } = require("../models/models")


const getRafting= ( async ( req , res , next)=>{
    try{
        const buscar = await Rafting.find()
        res.status(200).json(buscar)
    }
    catch (error) {
        next({ statusText: error.message })

    }
})


module.exports = {
    getRafting
}