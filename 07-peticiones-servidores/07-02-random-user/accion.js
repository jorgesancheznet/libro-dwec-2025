const main=document.querySelector("main");

fetch("https://randomuser.me/api/")
    .then((resp) => {
        return resp.json();
    })
    .then(data => {
        //Aunque solo nos devuelve un usuario,
        // viene en un array llamado results
        // Por eso accedemos a la posición 0
        let datos=data.results[0];
        // Usamos variables para guardar los datos que
        // nos interesan y así el código es más legible
        let foto=datos.picture.large;
        let mail=datos.email;
        let nombre=datos.name.first;
        let apellido=datos.name.last;
        let calle=datos.location.street;
        let ciudad=datos.location.city;
        let estado=datos.location.state;

        //Colocamos los datos en el HTML
        main.innerHTML=
            `<figure>`+
            `<img src='${foto}' alt='foto'>`+
            `</figure>` +
            `<p>${nombre} ${apellido}</p>` +
            `<p>Email: ${mail}</p>` +
            `<p>${calle}</p>` +
            `${ciudad} (${estado.toUpperCase()})</p>`;
    })
    .catch(error=>{
        main.innerHTML=`<p class='error'>${error}</p>`;
    });
