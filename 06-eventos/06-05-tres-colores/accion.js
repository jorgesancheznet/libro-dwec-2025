
window.addEventListener('DOMContentLoaded', ()=> {
    // Array con el orden de colores
    const COLOR = ["transparent","blue","green",
                    "yellow","orange","red"];

    const parrafos = document.querySelectorAll("p");
    parrafos.forEach(parrafo => {
        // Ponemos a todos los párrafos inicialmente
        // el atributo data-index a 0
        parrafo.dataset.index = 0;
        // Preparamos el evento de cada párrafo
        parrafo.addEventListener("click", ()=> {
            // Recogemos el índice del color actual de este párrafo
            let nColor = parrafo.dataset.index;
            // Elegimos el siguiente color
            nColor++;
            // Si hemos llegado al final,
            // empezamos de nuevo
            if(nColor === COLOR.length) nColor = 0;
            // Colocamos ese color de fondo
            parrafo.style.backgroundColor = COLOR[nColor];
            // Actualizamos el color en el atributo
            // data-index del párrafo
            parrafo.dataset.index = nColor;
        })
    })
});
