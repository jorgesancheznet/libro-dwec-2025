/**
 * Busca un texto en un elemento y si le encuentra
 * le deja seleccionado mediante el elemento mark
 * @param textoBusq El texto que estamos buscando
 * @param elemento El elemento en el que buscamos el texto
 * @returns {boolean} true si se ha encontrado y marcado la palabra
 */
function marcarTexto(textoBusq, elemento) {
    let texto = elemento.textContent;
    //comprobamos si el texto está en el elemento
    let pos = texto.indexOf(textoBusq);
    if (pos !== -1) {
        //usamos una expresión regular para modificar todas
        //las apariciones del texto con el modificador g
        //El método replace de los strings admte expresiones
        //regulares
        let expReg = new RegExp(textoBusq, "g");
        //se reemplazan todas las apariciones de la palabra
        //contenido con el texto marcado
        elemento.innerHTML = elemento.innerHTML.replace(
            expReg, "<mark>" + textoBusq + "</mark>");
        return true;
    }
    else
        return false;
}

/**
 * Busca un texto en un elemento y en los hijos de
 * ese elemento. Para ello utiliza al método
 * marcarTexto
 * @param textoBusq EL texto que buscamos
 * @param elemento El elemento en el que le buscamos
 */
function buscarTextoEnElemento(textoBusq, elemento) {
    if (elemento.children) {
        //Recorrido de todos los hijos del elemento
        for (let hijo of elemento.children) {
            if (hijo.children.length > 0) {
                //Llamada recursiva si el hijo
                //a su vez tiene hijos
                buscarTextoEnElemento(textoBusq, hijo);
            }
            else {
                marcarTexto(textoBusq, hijo);
            }
        }
    }
}

//Código principal
let textoABuscar = prompt("Escriba el texto a marcar");
if(textoABuscar) {
    let main = document.querySelector("main");
    if (main) { //Hay elemento main
        buscarTextoEnElemento(textoABuscar, main);
    }
    else {
        alert("El documento no dispone de elemento main");
    }

}



