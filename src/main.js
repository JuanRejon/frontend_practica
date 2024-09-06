
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
    inventarios: [
        {
            id: 1,
            color: 'Azul',
            cantidad: 5,
            precio: 1100000
        },
        {
            id: 2,
            color: 'Rojo',
            cantidad: 2,
            precio: 1400000
        },
        {
            id: 3,
            color: 'Amarillo',
            cantidad: 8,
            precio: 1200000
        },
    ],
    totalInventario: function () {
        let total = 0;
        this.inventarios.forEach(inventario => {
            total = total + inventario.precio * inventario.cantidad;
        });
        return total;
    },
    costo: 1000000,
    saludo: function(){
        return `Hola ${this.marca.nombre} ${this.nombre}`;
    }
}


carro.costo = 14000000;
console.log(carro);

const salud = carro.saludo();
console.log(salud);
console.log(carro.totalInventario());


