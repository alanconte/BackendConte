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
        const data = await fs.promises.readFile('data/productos.json','utf-8')
        const productos = JSON.parse(data)
        
    }
    // ! Traer Producto por ID Random para /randomProduct
    
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

app.get('/productos',()=>{

})

//! traer producto random

app.get('/productoRadom',()=>{

})

app.listen(8080,()=>{
    
})