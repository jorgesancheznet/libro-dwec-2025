window.addEventListener("DOMContentLoaded", ()=>{
    let giro = 1;
    const abeja = document.getElementById("abeja");
    const main = document.querySelector("main");
    main.addEventListener("mousemove", (evt)=>{
        abeja.style.top = evt.clientY + "px";
        abeja.style.left = evt.clientX + "px";
    });
    main.addEventListener("click", (evt)=>{
        abeja.style.transform = `rotate(${giro}turn)`;
        abeja.style.transition = " transform 1s";
        giro++;
    });
});