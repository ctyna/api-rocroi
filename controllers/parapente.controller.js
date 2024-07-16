const { Parapente } = require("../models/models")

const getParapente = ( async ( req , res , next)=>{
    try {
     const buscar = await Parapente.find()
     res.status(200).json(buscar)
     
    } catch (error) {
     next({ statusText: error.message })
     
    }
 })
 

 module.exports = {
     getParapente
 }