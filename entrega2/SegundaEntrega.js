const fs = require('fs')

class Contenedor {
    constructor(archivo){
        this.archivo=archivo
    }

    save(obj){
        const cont = fs.readFileSync(this.archivo, 'utf-8');
        const prods = JSON.parse(cont);
        const id = 
        prods.length>0 ? prods[prods.length - 1].id + 1
        : prods.length +1;
        const prod = {id,...obj};
        prods.push(prod)
        fs.writeFileSync(this.archivo, JSON.stringify(prods, null, 2))
        return id
    }
    getById(id) {
        const data= fs.readFileSync(this.archivo,'utf-8')
        const dataParse= JSON.parse(data)
        const obj = dataParse.find((obj)=>obj.id===id)
        return console.log(obj)
    }
    getAll(){
        const data = fs.readFileSync(this.archivo,'utf-8')
        const dataParse= JSON.parse(data)
        return console.log(dataParse)
    }
    deleteById(id){
        const data = fs.readFileSync(this.archivo,'utf-8')
        const dataParse = JSON.parse(data)
        const dataFiltrada = dataParse.filter((objeto) => objeto.id !== id)
        const dataString = JSON.stringify(dataFiltrada)
        fs.writeFileSync(this.archivo, dataString)
        return dataFiltrada
    }
    deleteAll(){
        fs.writeFileSync(this.archivo, [])
        return []
    }
}

const contenedor = new Contenedor('./data/productos.txt')

const prod1 = {
    name: 'Bajo',
    price: 400000
}
contenedor.save(prod1)
contenedor.getById(2)
contenedor.deleteById(2)
contenedor.getAll()
// contenedor.deleteAll()
