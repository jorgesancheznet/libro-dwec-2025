/**
 * Función de validación del NIF
 * @param nif NIF a validar
 * @returns {boolean} true si el NIF es válido
 */
function validarNIF(nif){
    const expNIF = /^[XYZ0-9][0-9]{7}[A-HJ-NP-TV-Z]$/
    if(expNIF.test(nif)){
        const ARRAY_NIF = "TRWAGMYFPDXBNJZSQVHLCKE";
        let numeroNIF, resto;
        if(nif.charAt(0) === "X") nif = "0"+nif.substring(1);
        if(nif.charAt(0) === "Y") nif = "1"+nif.substring(1);
        if(nif.charAt(0) === "Z") nif = "2"+nif.substring(1);
        numeroNIF = nif.substring(0,nif.length - 1);
        console.log(nif)
        console.log(numeroNIF)
        resto = numeroNIF % 23;
        return ARRAY_NIF.charAt(resto) === nif.charAt(nif.length - 1);
    }
    else{
        return false;
    }
}


window.addEventListener('DOMContentLoaded', () => {
    const nif = document.getElementById('nif');
    const boton = document.querySelector('form button');
    // Cada vez que levantemos la tecla
    // comprobamos el NIF
    nif.addEventListener("keyup", evt => {
        if(validarNIF(nif.value)){
            //Si el NIF es válido activamos el botón
            boton.disabled = false;
        }
        else{
            boton.disabled = true;
        }
    })
})