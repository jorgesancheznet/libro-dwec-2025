/**
 * Retorna un texto con la primera letra en mayúscula
 * @param {string} texto
 */
function primeraMayus(texto){
    return  texto[0].toUpperCase() +
        texto.slice(1).toLowerCase();
}

/**
 * Función que fcoloca los datos de un usuario
 * en el elemento HTMl indicado
 * @param {Element} capaUsuario Elemento HTML en el que se
 * colocarán los datos
 * @param {JSON} usuario Datos de usuario en
 * el formato enviado por el servicio randomuser.me
 */
function rellenaUsuario(capaUsuario,usuario){
    let foto=usuario.picture.large;
    let mail=usuario.email;
    let nombre=usuario.name.first;
    let apellido=usuario.name.last;
    let calle=usuario.location.street.name;
    let ciudad=usuario.location.city;
    let estado=usuario.location.state;

    capaUsuario.innerHTML=
        `<figure>` +
        `<img src='${foto}' alt='foto'>` +
        `</figure>` +
        `<p>${nombre} ${apellido}</p>` +
        `<p>${mail}</p>` +
        `<p>${calle}</p>` +
        `${primeraMayus(ciudad)}, (${primeraMayus(estado)})</p>` +
        `<p><button>Cambiar</button></p>`;
}

/**
 * Manejador de clic de botón cambiar en una capa
 * que muestra los datos del usuario
 * @param {Element} capaUsuario Contenedor HTML que contiene
 * los datos a cambiar del usuario
 */
function generarEventoBoton(capaUsuario){
    //Asignamos evento al botón
    let boton=capaUsuario.querySelector("button");
    boton.addEventListener("click",(ev)=>{
        //Mensaje de espera que desaparece cuando se cargan los datos
        capaUsuario.textContent="Esperando datos nuevos...";
        //Hacemos petición de 1 usuario aleatorio nuevo
        fetch('https://randomuser.me/api')
            .then(resp=>resp.json())
            .then(data=>{
                let usuario=data.results[0];
                //Modificamos los datos de la capa actual
                rellenaUsuario(capaUsuario,usuario);
                //Se vuelve a configurar de nuevo el clic del botón
                generarEventoBoton(capaUsuario);
            })
            .catch(error=>{
                capaUsuario.innerHTML=`<p class='error'>${error}</p>` +
                    `<p><button>Intentar de nuevo</button></p>`;
            });
    })
}


/**
 * Zona principal del código, se ejecuta al inicio
 */
const main=document.querySelector("main");
main.textContent="Esperando usuarios...";
//Petición inicial de los 10 usuarios
fetch('https://randomuser.me/api/?results=10')
    .then((resp) => resp.json())
    .then(data=>{
        let datos=data.results;
        main.textContent="";
        for(let usuario of datos){
            //Generamos el HTML de cada capa con datos de usuario
            let seccionUsuario=document.createElement("section");
            rellenaUsuario(seccionUsuario,usuario);
            //Se asigna evento al botón Cambiar del usuario
            generarEventoBoton(seccionUsuario);
            //Añadimos la nueva sección con los datos del usuario
            main.appendChild(seccionUsuario);
        }
    })
    .catch(error=>{
        main.innerHTML=`<p class='error'>${error}</p>`;
    });
