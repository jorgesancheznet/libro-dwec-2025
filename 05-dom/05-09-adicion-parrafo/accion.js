let texto = prompt("Escribe el texto que desees");
let posicion;
if (texto != null) {
    do {
        posicion = prompt("Escriba la posición de ese texto" +
                        "(número del 1 al 10)");
        if (posicion != null) {
            posicion = parseInt(Number(posicion));
            if (isNaN(posicion) || posicion < 1 || posicion > 10) {
                alert("Número no válido")
            }
        }
    } while (posicion != null && (isNaN(posicion) ||
                posicion < 1 || posicion > 10));
    //colocación del texto en su posición
    let main = document.querySelector("main");
    let parrafos = document.getElementsByTagName("p");
    let nuevoElemento = document.createElement("p");
    nuevoElemento.innerHTML = `<strong>${texto}</strong`;
    if (posicion == 10) {
        //si el número es el 10 se añade al final
        main.append(nuevoElemento);
    }
    else {
        //Si no se añade delante de la posición indicada
        //se resta uno porque se numera desde el 0
        parrafos[posicion - 1].before(nuevoElemento);
    }
}