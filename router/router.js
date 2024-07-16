const express = require ('express')
const { postLogin} = require('../controllers/login.controller')
const { postUser } = require('../controllers/register.controller')
const { getActividad } = require('../controllers/principal.controller')
const { getRafting } = require('../controllers/rafting.controller')
const { postReserva, getReserva, getDelete, getActualizar } = require('../controllers/reserva.controller')
const { getFerrata } = require('../controllers/ferrata.controller')
const { getGlobo } = require('../controllers/globo.controller')
const { getParapente } = require('../controllers/parapente.controller')
const { getBarranquismo } = require('../controllers/barranquismo.controller')
const { getEscalada } = require('../controllers/escalada.controller')


const router = express.Router()

// Ruta para hacer Login el usuario
router.route('/login')
    .post(postLogin)
// Ruta para nuevos usuarios para que se registren
router.route('/register')
    .post(postUser)

// Ruta para ver las actividades
router.route('/principal')
.get(getActividad)

// Ruta para acceder a la información de rafting

router.route('/actividades/rafting')
.get(getRafting)


// Ruta para acceder a la información de ferratas
router.route('/actividades/vias_ferratas')
.get(getFerrata)


// Ruta para acceder a la información de Globo
router.route('/actividades/vuelos_en_globo')
.get(getGlobo)

// Ruta para acceder a la información de Parapente
router.route('/actividades/parapente')
.get(getParapente)

// Ruta para acceder a la información de Barranquismo
router.route('/actividades/barranquismo')
.get(getBarranquismo)

// Ruta para acceder a la información de Escalada
router.route('/actividades/escalada')
.get(getEscalada)





// Ruta para las reservas

router.route('/reservas')
      .get(getReserva)
      .post(postReserva)
      .put(getActualizar)

// Eliminar reservas

router.route('/reservas/:id')
    .delete(getDelete)

        
router.all('*' , ( req , res , next )=>{
        const err = new Error()
              err.status     = 404 
              err.statusText = `No encuentro el Endpoint`
        next(err)
    })


    router.use(( err , req , res , next )=>{
        let { status , statusText } = err
              status     = status     || 500
              statusText = statusText || `Error interno de mi API`
        res.status(status).json({ status , statusText })
    })






module.exports={
    router
}