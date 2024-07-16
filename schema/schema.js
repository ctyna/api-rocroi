const mongoose = require ('mongoose')

// Schema usuarios
const usuarioSchema = new mongoose.Schema(
    { username  : String , pass : String},
    {collection : 'usuarios' , versionKey: false}
)

// Schema actividades
const actividadSchema = new mongoose.Schema(
    { title: String, intro: String, src : String, src_web :  String, alt : String, top : Boolean, season : String, name : String},
    {collection : 'actividades' , versionKey: false}
)

//Schema ferratas

const ferratasSchema = new mongoose.Schema(
    {title: String, info: String, src : Object , general : String, specific : String, view : String, included : Object, guide : String,
        clothes : String,  difficulty : Object, level : String, duration : String,
        stuff : Object, dress : String, cream : String, apt : Object, swim : String, age : String, mayor : String, weight : String, precio : Number,
    },
    {collection : 'ferratas' , versionKey:false}
)

//Schema rafting

const raftingSchema = new mongoose.Schema(
    {title: String, info: String, src : Object , general : String, specific : String, view : String, included : Object, guide : String,
        clothes : String, transport : String, insurance : String, difficulty : Object, level : String, description : String, duration : String,
        stuff : Object, bikini : String, cream : String, apt : Object, swim : String, age : String, mayor : String, precio : Number,
    },
    {collection : 'rafting' , versionKey:false}
)

//Schema Globo

const globoSchema = new mongoose.Schema(
    {title: String, info: String, 
        src : Object , general : String, specific : String, view : String, 
        included : Object, transport : String, insurance : String, food : String, photos : String, 
        difficulty : Object, level : String, duration : String,
        stuff : Object, dress : String, ticket : String, 
        apt : Object, age : String, mayor : String, exclusion : String, 
        precio : Number,
    },
    {collection : 'globo' , versionKey:false}
)

//Schema Parapente

const paratenteSchema = new mongoose.Schema(
    {title: String, info: String, 
        src : Object , general : String, specific : String, view : String, 
        included : Object, transport : String, insurance : String, guide: String,
        difficulty : Object, level : String, duration : String,
        stuff : Object, dress : String, shoes : String, 
        apt : Object, age : String, mayor : String, exclusion : String, 
        precio : Number,
    },
    {collection : 'parapente' , versionKey:false}
)

//Schema Barranquismo

const barranquismoSchema = new mongoose.Schema(
    {title: String, info: String, 
        src : Object , general : String, specific : String, view : String, 
        included : Object, transport : String, insurance : String, guide: String,
        difficulty : Object, level : String, duration : String,
        stuff : Object, dress : String, shoes : String, 
        apt : Object, age : String, mayor : String, exclusion : String, 
        precio : Number,
    },
    {collection : 'barranquismo' , versionKey:false}
)


//Schema escalada

const escaladaSchema = new mongoose.Schema(
    {title: String, info: String, 
        src : Object , general : String, specific : String, view : String, 
        included : Object, material : String, insurance : String, guide: String,
        difficulty : Object, level : String, duration : String,
        stuff : Object, dress : String, food : String, 
        apt : Object, age : String,  exclusion : String, 
        precio : Number,
    },
    {collection : 'escalada' , versionKey:false}
)




// Schema Reservas

const reservasSchema = new mongoose.Schema(
    {activity : String, email : String, date : String, hour : String, users : String},
    {collection : 'reservas' , versionKey: false}
)




// Exportación de los elementos
module.exports = {
    usuarioSchema,
    actividadSchema,
    raftingSchema,
    reservasSchema,
    ferratasSchema,
    globoSchema,
    paratenteSchema,
    barranquismoSchema,
    escaladaSchema
}
