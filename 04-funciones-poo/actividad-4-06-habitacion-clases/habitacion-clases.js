class Habitacion {
    constructor(nombre, temperatura) {
        this.nombre = nombre;
        this.temperatura = temperatura;
    }

    subir(grados) {
        this.temperatura += grados;
    }

    bajar(grados) {
        this.temperatura -= grados;
    }

    mostrar() {
        console.log(`La temperatura de ${this.nombre} es de ${this.temperatura} ºC`);
    }
}

//Ejemplo de uso
let habitacion1 = new Habitacion("Sala de estar", 22);
habitacion1.mostrar(); // La temperatura de Sala de estar es de 22 ºC
habitacion1.subir(3);
habitacion1.mostrar(); // La temperatura de Sala de estar es de 25 ºC
habitacion1.bajar(5);
habitacion1.mostrar(); // La temperatura de Sala de estar es de 20 ºC