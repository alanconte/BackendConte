class Usuario {
    constructor(nombre,apellido,libros,mascotas){
        this.nombre=nombre,
        this.apellido=apellido,
        this.libros=libros,
        this.mascotas=mascotas
    }
    getFullName(){console.log(`${this.nombre} ${this.apellido}`)};
    addMascota(mascota){this.mascotas.push(mascota)};
    countMascotas(){console.log(this.mascotas.length)};
    addBook(titulo,autor){this.libros.push({titulo,autor})};
    getBookNames(){
        const titulos=[]; 
        this.libros.map(({titulo})=>titulos.push(titulo))
        return (console.log(titulos))
    }
}

const Alan = new Usuario(
    'Alan',
    'Conte',
    [{titulo:'Cancion de hielo y fuego',autor:'George R. R. Martin'} , {titulo:'El fin del materialismo', autor:'Charles Tart'}],
    ['Nilo','Alma']
);
console.log(Alan)
Alan.addBook('Fahrenheit 451', 'Ray Bradbury')
Alan.getFullName()
Alan.addMascota('Pepe')
Alan.countMascotas()
Alan.getBookNames()