function ordenTamano(a, b) {
    if (a.length === b.length) {
        //ante tamaños iguales, ordenamos alfabéticamente
        return a.localeCompare(b);
    }
    else {
        //Ante tamaños diferentes, la diferencia de tamaños
        //nos devuelve un número positivo o negativo
        return a.length - b.length;
    }
}

const arrayPalabras = ["Ñu","Águila","boa","oso","marsopa","Nutria"];
arrayPalabras.sort(ordenTamano);
console.log(arrayPalabras);