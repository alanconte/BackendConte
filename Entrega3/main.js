const express = require('express')
const db = require('./db.js')
const DB = new db('data')
// * EXPRESS
const app = express();
//! traer array de productos

app.get('/productos', async (req,res)=>{
    const data = await DB.getProductos()
    return res.send(data)
})

//! traer producto random

app.get('/productoRadom', async(req,res)=>{
    const data = await DB.getProductoId(Math.floor(Math.random()*(5-1)+1))
    return res.send(data)
})

const appCon = app.listen(8080,()=>{
    console.log(`El servidor esta iniciado en el puerto: ${appCon.address().port}`)
})

