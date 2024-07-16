const { Globo } = require("../models/models")




const getGlobo = ( async ( req , res , next)=>{
    try {
     const buscar = await Globo.find()
     res.status(200).json(buscar)
     
    } catch (error) {
     next({ statusText: error.message })
     
    }
 
 
 
 })
 
 
 
 module.exports = {
     getGlobo
 }