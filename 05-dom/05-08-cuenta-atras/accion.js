let cont = 10;
let pContador = document.getElementById("contador");
let temp = setInterval(()=>{
    pContador.innerText = cont--;
    if(cont === 0){
        location = "https://es.wikipedia.org";
    }

}, 1000);