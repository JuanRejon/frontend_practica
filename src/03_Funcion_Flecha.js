
const obtenerInfo = (name = 'Stel', apellido = 'Kuro') => `${name} ${apellido}`;
const info = obtenerInfo('Juan', 'Rejon');

const sum = (a = 0, b = 0) => a + b;
console.log(sum(20, 10));

console.log(info);

