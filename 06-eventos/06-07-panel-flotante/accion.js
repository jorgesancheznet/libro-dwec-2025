window.addEventListener("DOMContentLoaded", ()=>{
   const panel  = document.getElementById("panel");
   const bVez1 = document.getElementById("vez1");
   const bParaSiempre = document.getElementById("paraSiempre");
   let intervalo = setInterval(()=>{
       /* El panel se muestra a los 5 segundos*/
       panel.style.display = "block";
   },5000);

   bParaSiempre.addEventListener("click", ()=>{
        panel.remove();
   });

   bVez1.addEventListener("click", ()=>{
       clearInterval(intervalo);
       panel.style.display = "none";
   })
});