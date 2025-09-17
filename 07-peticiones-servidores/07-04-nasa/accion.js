function generarImagenAmpliada(boton, url) {
    boton.addEventListener("click", () => {
        const imagenGrande = document.querySelector("#imagenGrande");
        imagenGrande.style.backgroundImage = `url(${url})`;
        imagenGrande.style.display = "block";
    });

}

addEventListener("DOMContentLoaded", () =>{
    const form = document.querySelector("form");
    const resultados = document.querySelector("#resultados");

    imagenGrande.addEventListener("click", () =>{
        imagenGrande.style.display = "none";
    })

    form.addEventListener("submit", evt => {
        const inicio =  document.querySelector("#inicio").value;
        const final =  document.querySelector("#final").value;
        const url = `https://api.nasa.gov/planetary/apod` +
            `?api_key=DEMO_KEY&start_date=${inicio}&end_date=${final}`;
        evt.preventDefault();
        resultados.innerHTML = "<p>Cargando...</p>";
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                //Vaciado de la capa de resultados
                resultados.innerHTML = "";
                data.forEach(imagen => {
                    // Solo tratamos las imágenes, no los vídeos
                    if (imagen.media_type === "image") {
                        let figure = document.createElement("figure");
                        let boton = document.createElement("button");
                        figure.innerHTML =
                            `<img src='${imagen.url}' alt='${imagen.title}'>` +
                            `<figcaption>${imagen.date} <br> `+
                            `${imagen.title}</figcaption> <br>`;
                        boton.textContent = "Ampliar";
                        generarImagenAmpliada(boton,imagen.hdurl);
                        figure.append(boton);
                        resultados.append(figure);

                    }
                });
            })
            .catch(error => {
                resultados.innerHTML = `<p class='error'>No se han obtenido datos</p>`;
            });

    })
})