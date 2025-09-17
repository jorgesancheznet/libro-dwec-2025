function contarVocales(palabra) {
    // Expresión regular válida para cualquier vocal,
    // incluyendo acentuadas
    const expVocales =/[aeiouáéíóúü]/;
    let contador = 0;

    // Recorremos cada letra de la palabra
    for (let letra of palabra) {
        // Si la letra es una vocal, incrementamos el contador
        if(expVocales.test(letra.toLocaleLowerCase())) {
          contador++;
        }
    }
    return contador;
}

let palabra = "Argüelles";
console.log(`La palabra "${palabra}" tiene ${contarVocales(palabra)} vocales.`);