//Todo el código le colocamos de forma que tengamos
//asegurada toda la carga del DOM
window.addEventListener("DOMContentLoaded", function (ev) {
    //asignación de elementos
    const form = document.querySelector("form");
    const imagen = document.getElementById("imagen");
    const combo = document.getElementById("tipo");
    const serie = document.getElementById("serie");
    const labelSerie = document.getElementById("labelSerie");
    const labelDescripcion = document.getElementById("labelDescripcion");
    const enviar = document.getElementById("enviar");
    const mostrarDescripcion = document.getElementById("mostrarDescripcion");
    const capaError = document.getElementById("capaError");
    const fDescripcion = document.getElementById("fDescripcion");

    //Cuadro combinado que cambia la imagen
    combo.addEventListener("input",  (evt)=> {
        //Esta línea cambia la imagen. El nombre de cada imagen
        //coincide con el valor de cada opción del combo
        imagen.setAttribute("src", `img/${combo.value}.jpg`);
        //QUitamos cualquier clase asignada al cuadro del nº de serie
        //por si se estaba mostrando un error
        labelSerie.removeAttribute("class");
        serie.removeAttribute("class");
    });

    //Si se coloca el foco en el número de serie
    //quitamos los errores
    serie.addEventListener("focus",  ()=> {
        capaError.textContent = "";
        labelSerie.classList.remove("error");
        serie.classList.remove("error");
    });
    //Validación del número de serie al intentar enviar los datos
    form.addEventListener("submit", function (evt) {
        if (/^[0-9]{3}[A-Z]{4}[12A]$/.test(serie.value) === false) {
            evt.preventDefault();
            capaError.textContent = "Código no válido";
            labelSerie.classList.add("error");
            serie.classList.add("error")
        }
    });
    //Al hacer en el botón de descripción, se muestra una capa
    //con el área de texto y la etiqueta
    mostrarDescripcion.addEventListener("click",  (evt)=> {
        fDescripcion.style.display = "inline-block";
        //Ocultamos el botón
        mostrarDescripcion.style.display = "none";
    });
});