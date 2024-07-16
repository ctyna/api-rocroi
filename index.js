console.clear()
console.log('Iniciando JS')



const express    = require('express')
const cors       = require('cors')
const mongoose   = require ('mongoose')
const { router } = require('./router/router')

// Variables de entorno

const PORT  = process.env.PORT  || 3000
const MONGO = process.env.MONGO ||'mongodb://127.0.0.1:27017/rocroi'


const conectar = async ()=> mongoose.connect(MONGO)
                .then(()=> console.log ('Conectando con Mongoose'))
                .catch( err => console.log( err.message))

conectar()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(router)




app.listen (PORT , ()=>console.log('Iniciando API'))
