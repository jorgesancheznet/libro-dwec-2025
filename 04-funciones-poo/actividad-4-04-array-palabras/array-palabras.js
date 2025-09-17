let aPalabras = [
    "Naranja","Kiwi","Manzana","Pera","Sandía",
    "Melón","Piña","Cereza","Fresa","Mango",
];
//Dejamos las palabras que tienen más de 5 letras
let aPalabrasMas5 = aPalabras.filter(
                        palabra => palabra.length > 5);
console.log(aPalabrasMas5);
//Convertimos las palabras a mayúsculas
let aPalabrasMayusculas = aPalabrasMas5.map(
                        palabra => palabra.toUpperCase());
console.log(aPalabrasMayusculas);
//Mostrar el tamaño de las letras del primer array
let tam = aPalabras.reduce(
                        (acumulador, palabra) => acumulador + palabra.length, 0);
console.log(`El tamaño de las letras del primer ` +
    `array es: ${tam}`);
