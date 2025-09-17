window.addEventListener("DOMContentLoaded",(e)=> {
    const mas = document.getElementById("mas");
    const tarea = document.getElementById("tarea");
    const lista = document.getElementById("lista");
    const contenedorLista =
                document.getElementById("contenedorLista");
    //Acción de añadir una tarea
    mas.addEventListener("click", (evt) => {
        evt.preventDefault();
        //Se crea un nuevo elemento <li> para la tarea
        let nuevoItem = document.createElement("li");
        //El texto de la tarea le encerramos en un elemento <span>
        //de clase CSS "texto"
        //El botón de quitar es un elemento <a>
        //de clase CSS "menos"
        //De la misma manera añadimos los botones "subir" y "bajar"
        nuevoItem.innerHTML = `<span class='texto'>${tarea.value}` +
            `</span><a href="#" class="menos">quitar</a>` +
            `<a href="#" class="subir">subir</a>` +
            `<a href="#" class="bajar">bajar</a></li>`;
        lista.appendChild(nuevoItem);
        tarea.value = ""; //Se borra el cuadro de texto
        tarea.focus();
    });

    //El evento de quitar la tarea lo indicamos en la sección
    //porque inicialmente no hay elementos <a> en el documento
    //podríamos hacerlo al añadir el elemento, pero es más
    //sencillo hacerlo así gracias a la propiedad target del
    //evento que nos indica el elemento que ha originado el evento
    contenedorLista.addEventListener("click",(evt)=>{
        //comprobamos si el clic es en un elemento de clase CSS "menos"
        if (evt.target.classList.contains("menos")){
            //Si es así, eliminamos el elemento <li> que es el padre
            evt.target.parentElement.remove();
        }
        //comprobamos si el clic es en un elemento de clase CSS "subir"
        else if (evt.target.classList.contains("subir")){
            let elemento = evt.target.parentElement;
            //Comprobamos que no sea el primer elemento
            if (elemento.previousElementSibling){
                //Colocamos el elemento <li> antes del elemento
                //hermano anterior
                lista.insertBefore(elemento,
                    elemento.previousElementSibling);
            }
        }
        //Comprobamos si el clic es en un elemento de clase CSS "bajar"
        else if (evt.target.classList.contains("bajar")){
            let elemento = evt.target.parentElement;
            //Comprobamos que no sea el último elemento
            if (elemento.nextElementSibling){
                //Colocamos el elemento <li> después del elemento
                //hermano siguiente
                lista.insertBefore(elemento.nextElementSibling,
                    elemento);
            }
        }
        //Comprobamos si el clic es en un elemento de clase CSS "texto"
        else if (evt.target.classList.contains("texto")){
            //Colocamos el elemento <li> al principio de la lista
            lista.prepend(evt.target.parentElement);
        }
    });
});
