
const carro = {
    id: 1,
    nombre: 'LaFerrari',
    date: new Date(),
    marca: {
        id: 1, 
        nombre: 'Ferrari',
        ubicacion: 'Italia',
        age: 100
    },
    costo: 10000000,
    saludo: function(){
        return `Hola ${this.marca.nombre} ${this.nombre}`;
    }
}

//carro.nombre = 'F40';
//carro.costo = 15000000;

console.log(carro);

const salud = carro.saludo();
console.log(salud);
