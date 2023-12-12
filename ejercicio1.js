/**
 * Hacer un aulas, una de música y otra de sistemas
 * Hay que aplicar la herencia (extends)
 * Hay que hacer un constructor
 * 
 */

'use strict'
class Aula {
    planta = 1;

    constructor(numero, cant_alumnos) {
        this.numero = numero;
        this.cant_alumnos = cant_alumnos;
    };

    maxAlumnos() {
        return `En este aula caben como máximo ${this.cant_alumnos} alumnos`;    
    };
};

let clase1 = new Aula(2, 34);
console.log(clase1.maxAlumnos());


//-----------------------------------------------------------
class claseSistemas extends Aula{
    constructor () {
        super(1, 20);
        // De esta manera se hereda del constructor
    }
    
}

let clase2 = new claseSistemas();
console.log(clase2.maxAlumnos());


//-----------------------------------------------------------
class claseMusica extends Aula{
    // Con extends recibes todo lo que se encuentre declarado en la clase padre aunque no se encuentre declarado en esta
    instrumentos = "";
    

    maxAlumnos() {
        return `En música hay como máximo ${this.cant_alumnos} y la planta es ${this.planta}`;
    }
}

// Si se quira el constructor se podría crear un objeto de esta forma tan solo con el extends
let clase3 = new claseMusica(2, 33);
console.log(clase3.maxAlumnos());


//-----------------------------------------------------------
