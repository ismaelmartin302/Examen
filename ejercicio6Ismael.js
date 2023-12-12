'use strict'

/**
 * 
 * . Crea un script que pida al usuario 100 números, y muestre en
 * pantalla únicamente la suma
 * de los que son números primos.
 */



// El prompt sirve para señalar de cuanto es el rango

function analizadorPrimos(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            return false;
        }
        
    } return true
}
/* let numero = prompt("Dime un numero")
console.log(analizadorPrimos(numero)) */

let lista_Numeros = Array(); 
for (let i = 2; i <= 100; i++) {
    lista_Numeros.push(i);
}

let suma_Primos = 0;
lista_Numeros.forEach(numero => {
    if (analizadorPrimos(numero) == true) {
        suma_Primos += numero;
    }
});

console.log(suma_Primos);
