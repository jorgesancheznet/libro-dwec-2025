Math.mcd = function (a, b) {
    //debemos asegurarnos de que tenemos dos números
    //naturales, de otro modo devolvemos NaN
    //si hay decimales, los quitamos
    a = parseInt(Number(a));
    b = parseInt(Number(b));
    if (isNaN(a) || isNaN(b)) {
        return NaN;
    }
    //si algún número es cero, devolvemos cero
    else if (a == 0 || b == 0) return 0;
    //tomamos su valor positivo por si acaso
    a = Math.abs(a);
    b = Math.abs(b);

    //Algoritmo
    if (a % b != 0) return Math.mcd(b, a % b);
    else return b;
}

Math.mcm = function (a, b) {
    //eliminamos errores de la misma forma que en el mcd
    a = parseInt(Number(a));
    b = parseInt(Number(b));
    if (isNaN(a) || isNaN(b)) {
        return NaN;
    } else if (a == 0 || b == 0) return 0;
    a = Math.abs(a);
    b = Math.abs(b);

    //resultado basado en el mcd creado antes
    return (a * b) / Math.mcd(a, b);
}

class Fraccion {
    //propiedades privadas con sus valores por defecto
    #numerador = 0;
    #denominador = 1;

    constructor(numerador, denominador) {
        this.#numerador = numerador;
        this.#denominador = denominador;
        //si no se han recibido números,
        // creamos fracciones nulas
        if (isNaN(parseInt(Number(numerador)))) return null;
        if (isNaN(parseInt(Number(denominador)))) return null;
    }

    //Los métodos son publicos
    getNumerador() {
        return this.#numerador;
    }

    getDenominador() {
        return this.#denominador;
    }

    setNumerador(numerador) {
        {
            //solo cambiamos el numerador si el número es válido
            if (isNaN(parseInt(Number(numerador))) == false)
                //quitamos decimales
                this.#numerador = parseInt(numerador);
        }
    };

    setDenominador(denominador) {
        //solo cambiamos el denominador si el número es válido
        if (isNaN(parseInt(Number(denominador))) == false)
            //quitamos decimales
            this.#denominador = parseInt(denominador);
    }


    cambiarFraccion(numerador, denominador) {
        //aprovechamos los métodos anteriores
        this.setNumerador(numerador);
        this.setDenominador(denominador);
    }

    toString() {
        return (this.#numerador + "/" + this.#denominador);
    }

    simplificar() {
        //si el numerador o denominador valen cero,
        //no simplificamos:
        if (this.#numerador !== 0 && this.#denominador !== 0) {
            //miramos los signos
            if (Math.sign(this.#numerador) === Math.sign(this.#denominador)) {
                // signos iguales ambos numeros les pasamos a positivos
                this.#numerador = Math.abs(this.#numerador);
                this.#denominador = Math.abs(this.#denominador);
            } else {
                //con signos distintos, dejamos el numerador en negativo si no lo está
                if (this.#numerador >= 0) {
                    this.#numerador = -this.#numerador;
                    this.#denominador = -this.#denominador;
                }
            }
            let mcd = Math.mcd(this.#numerador, this.#denominador);
            this.#numerador /= mcd;
            this.#denominador /= mcd;
        }
    }

    suma(f) {
        //mcm de los denominadores
        let mcm = Math.mcm(this.#denominador,
            f.getDenominador());
        let denominadorRes = mcm;
        let numeradorRes =
            (mcm / this.#denominador) * this.#numerador +
            (mcm / f.getDenominador()) * f.getNumerador();
        let res =
            new Fraccion(numeradorRes, denominadorRes);
        res.simplificar();
        return res;
    }

    resta(f) {
        //mcm de los denominadores
        let mcm = Math.mcm(this.#denominador,
            f.getDenominador());
        let denominadorRes = mcm;
        let numeradorRes =
            (mcm / this.#denominador) * this.#numerador -
            (mcm / f.getDenominador()) * f.getNumerador();
        let res =
            new Fraccion(numeradorRes, denominadorRes);
        res.simplificar();
        return res;
    }

    multiplica(f) {
        let res = new Fraccion(
            this.#numerador * f.getNumerador(),
            this.#denominador * f.getDenominador()
        );
        res.simplificar();
        return res;
    }

    divide(f) {
        let res = new Fraccion(
            (this.#numerador * f.getDenominador()),
            (this.#denominador * f.getNumerador())
        );
        res.simplificar();
        return res;
    }
}

let f1=new Fraccion(6,10);
let f2=new Fraccion(6,4);
let f3=new Fraccion(60,24);
f1.setNumerador(3);
console.log(f1.toString()); //Escribe 3/10
console.log(f2.toString()); //Escribe 6/4
console.log(f3.toString()); //Escribe 60/24
f3.simplificar();
console.log(f3.toString()); //Escribe 5/2

let fSuma=f1.suma(f2);
let fResta=f1.resta(f2);
let fMultiplica=f1.multiplica(f2);
let fDivide=f1.divide(f2);
console.log(fSuma.toString()); //Escribe 9/5
console.log(fResta.toString()); //Escribe -6/5
console.log(fMultiplica.toString()); //Escribe 9/20
console.log(fDivide.toString()); //Escribe 1/5
