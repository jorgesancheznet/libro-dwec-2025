/*•	Crea una clase llamada Usuario que represente usuarios de una aplicación. la clase tendrá estas características:
    o	Propiedades privadas nombre y email ambas son strings.
    o	Al construir un usuario se indica su nombre y su email.
    o	Métodos getter y setter de estas dos propiedades (aunque en el capítulo no se han tratado, se trabajarán en esta actividad) para obtener y modificar el valor de estas propiedades
o	El email solo se considera válido si cumple esta expresión regular:
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
de otro modo consideramos que es erróneo y lanzaremos una excepción.
    o	Hay una tercera propiedad privada llamada activo que es un booleano que con valor true indica que el usuario está realmente activo. Los métodos activar y desactivar permiten modificar esta propiedad.
•	Crea también otra clase llamada UsuarioAutentificado que deriva de la anterior y añade una propiedad privada más: password
o	Los usuarios autentificados requieren ser creados con nombre, email (en las condiciones comentadas antes) y con su contraseña
o	La propiedad password dispone de getter y setter para modificar su valor
o	La contraseña tiene que tener más de 7 caracteres e incluir minúsculas, mayúsculas y símbolos especiales para considerarlos válidos. De otra forma lanzaremos un error.*/

class Usuario {
    #nombre;
    #email;
    #activo = false;

    constructor(nombre, email, activo = false) {
        this.#nombre = nombre;
        //validamos el email al crear el usuario
        if(this.#validarEmail(email)){
            this.#email = email;
        }
        this.#activo = activo;
    }

    //el método de validación del email es privado
    //lanza error si el email no es válido
    #validarEmail(email)
    {
        const patronEmail= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!patronEmail.test(email)) {
            throw new Error('Email inválido');
        }
        else{
            return true;
        }
    }
    //getter y setter para las propiedades privadas
    //permiten acceder y modificar los valores
    //de forma controlada
    get nombre() {
        return this.#nombre;
    }
    set nombre(nombre) {
        this.#nombre = nombre;
    }

    get email() {
        return this.#email;
    }
    set email(email) {
        //validamos el email al modificarlo
        if (this.#validarEmail(email)) {
            this.#email = email;
        }
    }

    activar() {
        this.#activo = true;
    }

    desactivar() {
        this.#activo = false;
    }

    isActivo() {
        return this.#activo;
    }
    toString() {
        return `Usuario: ${this.#nombre}, Email: ${this.#email}, Activo: ${this.#activo}`;
    }
}

let usuario1 = new Usuario("Juan Pérez", "a@b.com");
console.log(usuario1.toString());
//modificamos el email y lo ponemos inválido
try {
    usuario1.email = "invalid-email"; //no permitirá el cambio
}
catch (error) {
    console.error("Error al modificar el email:", error.message);
}
//modificamos el nombre
usuario1.nombre = "Ana Pérez";
console.log(usuario1.toString());
        //Muestra: Usuario: Ana Pérez, Email: a@b.com,
                // Activo: false
usuario1.activar();
console.log(usuario1.toString());
    //Usuario: Ana Pérez, Email: a@b.com,
                //  Activo: true




