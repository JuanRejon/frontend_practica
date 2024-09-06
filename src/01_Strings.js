// Declaracion de variable que cambiara con el tiempo.
let firstname = 'Juan';

firstname = 'Carlos';

// No permite modificar el valor despues de
// ser declarado.
const lastname = 'Rejon';

const condition = true;

if(condition){
    const lastname = "Kurokawa";
    console.log(lastname);
}

//Interpolacionde valores de variables y constantes

console.log(`Hola mundo!! 
    ${firstname} - ${lastname}`);

