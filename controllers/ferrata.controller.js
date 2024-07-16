const { Ferratas} = require("../models/models")


const getFerrata = ( async ( req , res , next)=>{
   try {
    const buscar = await Ferratas.find()
    res.status(200).json(buscar)
    
   } catch (error) {
    next({ statusText: error.message })
    
   }



})



module.exports = {
    getFerrata
}