const cuadrado = document.getElementById("cuadrado");

// Colocamos el cuadrado en el centro inicial de la ventana
let x = window.innerWidth / 2 - 25; // centrado restando la mitad de su tamaño
let y = window.innerHeight / 2 - 25;

cuadrado.style.left = x + "px";
cuadrado.style.top = y + "px";

// Detectar las teclas de flechas
document.addEventListener("keydown", (evt) => {
    const PASO = 10; // Cantidad de movimiento en píxeles
    if (evt.key === "ArrowUp") y -= PASO;
    else if (evt.key === "ArrowDown") y += PASO;
    else if (evt.key === "ArrowLeft") x -= PASO;
    else if (evt.key === "ArrowRight") x += PASO;

    // Actualizamos la posición
    cuadrado.style.left = x + "px";
    cuadrado.style.top = y + "px";
});
