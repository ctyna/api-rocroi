const { Barranquismo } = require("../models/models")

const getBarranquismo = ( async ( req , res , next)=>{
    try {
     const buscar = await Barranquismo.find()
     res.status(200).json(buscar)
     
    } catch (error) {
     next({ statusText: error.message })
     
    }
 })
 
 
 module.exports = {
     getBarranquismo
 }