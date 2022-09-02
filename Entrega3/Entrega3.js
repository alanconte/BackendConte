//? IMPORTACIONES
const fs = require('fs')
const express = require('express')
// * FS
class baseDeDatos  {
    constructor(archivo){
        this.archivo=archivo
    }
    // ! Agregar Productos
    async addProductos(objProduct){
        const data = await fs.promises.readFile('data/productos.json','utf-8') 
        const productos=JSON.parse(data)
        const id = productos.length + 1
        objProduct.id=id
        objProduct.stock = []
        productos.push(objProduct)
        const productoGuardar = JSON.stringify(productos)
        await fs.promises.writeFile('data/productos.json', productoGuardar)
    }
    // ! Traer Productos
    async getProductos(objProduct){
        try{const data = await fs.promises.readFile('data/productos.json','utf-8')
        const productos = JSON.parse(data)
        return productos
    } catch(err){return []}
    }
    // ! Traer Producto por ID Random para /randomProduct
    async getProductoId(id){
        try{
            const data = await fs.promises.readFile("data/productos.json")
            const productos = JSON.parse(data)
            const producto = productos.find((producto)=>producto.id == id)
            console.log(producto)
            return producto
        }catch(err){return "Producto no encontrado"}
    }
}
const db = new baseDeDatos('data')
    //!Agregando productos al json
    // db.addProductos({name:'Pizza', price:1000})
    // db.addProductos({name:'Empanadas', price:200})
    // db.addProductos({name:'Gaseosa', price:400})
    // db.addProductos({name:'Cerveza', price:350})



// * EXPRESS
const app = express();

//! traer array de productos

app.get('/productos', async (req,res)=>{
    const data = await db.getProductos()
    return res.send(data)
})

//! traer producto random

app.get('/productoRadom', async(req,res)=>{
    const data = await db.getProductoId(Math.floor(Math.random()*(5-1)+1))
    return res.send(data)
})

const appCon = app.listen(8080,()=>{
    console.log(`El servidor esta iniciado en el puerto: ${appCon.address().port}`)
})

