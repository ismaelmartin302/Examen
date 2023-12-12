/**
*   3. ifs logicos
*   Hay un objeto en en javascrit que se llama date (hora) que devuelve la fecha
*   Hay un metodo de la clase date, que se llama (gethours)
*   Este metodo lo que hace es pasar la hora exacta sin minuto ni segundos
*   El ejercicio lo que hace es que cuando tenga el entero que se obtiene que de una a hora a otra
*   haga una determindas cosas
*
*    En el examen cuando ya tienes esa variable haces un bucle con un rango 
*    de hora de tal hora a tal hora buenos dias, sino, buenas tardes y sino buenas noches.
*/

'use strict'

// ----------------------------Ismael------------------
// let fecha = new Date();
// let hora2 = fecha.getHours();
// /* console.log(hora); */

// let alarma = hora2 + 5;

// for (let hora = 0; hora < 24; hora++) {
//     if ((hora2 >= 8) && (hora2 <= 12)) {
//         console.log("Buenos dias");
//         break
//     } else if ((hora2 > 12) && (hora2 <= 18)) {
//         console.log("Buenas tardes");
//         break;
//     } else {
//         console.log("Buenas noches");
//         break;
//     }
// }

// ----------------------------Eliceo------------------
let fecha = new Date();
let horaInicio = fecha.getHours();

let cont = 48; /* Cuantas horas quieres contar */
for (let hora = horaInicio; hora <= 24; hora ++) {
    
    if (cont <= 0) {
        break;
    }
    if (hora % 8 == 0) {
        console.log(`Han pasado 8 horas a las ${hora}`);
    }

    if (hora == 24) {
        hora = 0;
    }
    cont -= 1;
    
}