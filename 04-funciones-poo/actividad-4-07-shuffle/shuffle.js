Array.prototype.shuffle = function () {
    //realizamos un swap de los elementos del array
    //tres veces el tamaño del array
    for (let cont = 1; cont <= this.length *3; cont++) {
        //Generamos dos números aleatorios entre 0 y
        // el tamaño del array
        let i = parseInt(Math.random() * this.length);
        let j = parseInt(Math.random() * this.length);
        //Swap de los elementos i y j
        [this[i], this[j]] = [this[j], this[i]];
    }
};

//array con números del 1 al 100
let aNumeros = [];
for (let i = 1; i <= 100; i++) {
    aNumeros.push(i);
}
//Desordenamos el array de números
aNumeros.shuffle();
//Mostramos el array desordenado
console.log(aNumeros);

//array con letras del abecedario
let aLetras = [];
for (let i = "A".charCodeAt(0);
     i <= "Z".charCodeAt(0); i++) {
    aLetras.push(String.fromCharCode(i));
}
//Desordenamos el array de letras
aLetras.shuffle();
//Mostramos el array desordenado
console.log(aLetras);