
//Reserva del usuario

const { Reservas } = require("../models/models")

// Introduccir una reserva de actividad

const postReserva = async ( req , res , next) => {

    try{
        const { activity, email , fecha,  users} = req.body
        const {  hour } = req.body
     
        const nueva = new Reservas({
            activity,
            email,
            date: fecha ,
            hour:  hour,  
            users
        });

        await nueva.save()
        const buscar = await Reservas.find()
        res.status(201).json(buscar)

    }
    catch (error) {
        next({ statusText: error.message })

    }
}

// Acceder a las reservas

const getReserva = async (req , res , next) =>{
    try{
        const buscar = await Reservas.find()
        res.status(200).json(buscar)
    }
    catch(error){
        next({ statusText: error.message })
    }
}

// Eliminar reserva :

const getDelete = async ( req , res , next) =>{
  try {
    const {id} = req.params
    await Reservas.findByIdAndDelete(id)
    const buscar = await Reservas.find()
    res.status(200).json(buscar)
    
  } catch (error) {
    next({ statusText: error.message })
  }
}

// Editar la reserva

const getActualizar = async ( req , res , next) =>{
   try {
    const {id , ...datos} = req.body
    await Reservas.findByIdAndUpdate( id , datos)
    const buscar = await Reservas.find()
    res.status(200).json(buscar)
    
   } catch (error) {
    next({ statusText: error.message })
   }
}



module.exports={
    postReserva,
    getReserva,
    getDelete,
    getActualizar
}