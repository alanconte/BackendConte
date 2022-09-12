const express = require('express')
const db = require('./db.js')
const DB = new db('data')

const app = express();
//MIDLEWARE express.urlencoded([opcions])
// ? app.use(express.urlencoded())
app.use(express.urlencoded())
app.use(express.json())
// * EXPRESS


app.get('/', (req,res)=>{
    res.send('Bienvenidos, ingrese a la ruta "/productos para obtener todos los productos, o "/productoRandom" para recibir un  producto aleatorio')
})

app.get('/productos', async (req,res)=>{
    const data = await DB.getProductos()
    return res.send(data)
})

app.get('/producto', async (req,res)=>{

    const {id} = req.query
    try{const data = await DB.getProductoId(id)
    return res.send(data)
    }catch(e){
        return res.status(404).send({error:true, msg:e.message})
    }
})

//! traer producto random

app.get('/productoRandom', async(req,res)=>{

    
    const data = await DB.getProductoId(Math.floor(Math.random()*(7-1)+1))
    return res.send(data)
})
app.post("/productos", async(req,res)=>{
    const { name, price } = req.body
    const data = await DB.addProductos({name,price})
    return res.send({error:false, msg: "producto agregado"})
})


const appCon = app.listen(8080,()=>{
    console.log(`El servidor esta iniciado en el puerto: ${appCon.address().port}`)
})

