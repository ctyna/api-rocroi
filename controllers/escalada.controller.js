const { Escalada } = require("../models/models")

const getEscalada = ( async ( req , res , next)=>{
    try {
     const buscar = await Escalada.find()
     res.status(200).json(buscar)
     
    } catch (error) {
     next({ statusText: error.message })
     
    }
 })
 
 module.exports = {
     getEscalada
 }