const mongoose = require('mongoose')
const { usuarioSchema, actividadSchema, raftingSchema, reservasSchema, ferratasSchema, globoSchema, paratenteSchema, barranquismoSchema, escaladaSchema } = require('../schema/schema')

// Modelo de los usuarios
const Usuario = mongoose.model('Usuario', usuarioSchema)

// Modelo de las actividades
const Actividad = mongoose.model('Actividad', actividadSchema)

// Modelo del rafting
const Rafting = mongoose.model('Rafting', raftingSchema)

// Modelo de reservas
const Reservas = mongoose.model('Reservas', reservasSchema)

//Modelo de ferratas
const Ferratas = mongoose.model('Ferratas', ferratasSchema)

//Modelo de Globo
const Globo = mongoose.model('Globo', globoSchema)

//Modelo de Parapente
const Parapente = mongoose.model('Parapente', paratenteSchema)


//Modelo de Barranquismo
const Barranquismo = mongoose.model('Barranquismo', barranquismoSchema)

//Modelo de Escalada
const Escalada = mongoose.model('Escalada', escaladaSchema)



module.exports = {
    Usuario,
    Actividad,
    Rafting,
    Reservas,
    Ferratas,
    Globo,
    Parapente,
    Barranquismo,
    Escalada
}