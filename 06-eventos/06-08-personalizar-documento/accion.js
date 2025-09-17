window.addEventListener("DOMContentLoaded",()=>{
    const color = document.getElementById("color");
    const main  = document.querySelector("main");
    const tipo = document.getElementById("tipo");
    const tamano = document.getElementById("tamano");

    color.addEventListener("input",()=>{
        main.style.color = color.value;
    });

    tipo.addEventListener("input",()=>{
        main.style.fontFamily = tipo.value;
    });

    tamano.addEventListener("input",()=>{
        main.style.fontSize = tamano.value + "pt";
    });
})