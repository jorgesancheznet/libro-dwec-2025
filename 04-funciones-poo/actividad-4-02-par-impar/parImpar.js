const esPar = numero => (numero % 2 === 0) ? "par" : "impar";

let x = 6;
let y = 7;
console.log(`El número ${x} es ${esPar(x)}.`); //Escribe: El número 6 es par.
console.log(`El número ${y} es ${esPar(y)}.`); //Escribe: El número 7 es impar.
