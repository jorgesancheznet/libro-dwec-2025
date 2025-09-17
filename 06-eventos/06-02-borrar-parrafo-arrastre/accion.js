window.addEventListener("DOMContentLoaded", ()=>{
    const boton = document.querySelector("button");
    const parrafos = document.querySelectorAll("p");


    //Impide que el botón se comporte de manera predeterminada
    boton.addEventListener("click", (evt)=>{
        evt.preventDefault();
    })
    //Al arrastrar el botón se colorea de amarillo
    boton.addEventListener("drag", ()=>{
        boton.style.backgroundColor = "yellow";
    });
    //Devolvemos el color original al soltar
    boton.addEventListener("dragend", ()=>{
        boton.style.backgroundColor = "lightgray";
    })

    //Eventos para cada párrafo
    parrafos.forEach((parrafo) => {
        //Al pasar por encima el párrafo se pinta de amarillo
        parrafo.addEventListener("dragenter", ()=> {
            parrafo.style.backgroundColor = "yellow";
        });
        //Devolvemos el color al salir
        parrafo.addEventListener("dragleave", ()=> {
            parrafo.style.backgroundColor = "transparent";
        });
        //Impedimos el comportamiento por defecto,
        //imprescindible para capturar el evento drop
        parrafo.addEventListener("dragover", (e)=> {
            e.preventDefault();
        });
        //Borramos el párrafo si hemos soltado encima
        parrafo.addEventListener("drop", (evt)=> {
            parrafo.remove();
        });
    });
});