/**
 * 
 * Crea un script que pida al usuario 100 números, y muestre en
 * pantalla únicamente la suma
 * de los que son números primos.
 */

// El ejercicio de Ismael esta en el index.html normal

var esPrimo = true;
contadorPrimos = 0;
sumar = 0;
for (let numero = 2; numero <= 100; numero++) {
    for (let contador = 0; contador <=numero; contador++) {
        if (numero % contador == 0) {
            contadorPrimos += 1;
            console.log();
        }
    }

    if (contadorPrimos >= 3) {
        console.log("Este número no es primo");
    } else {
        console.log("El numero " + numero + "primo.");
        sumar += numero;
    }

    contadorPrimos = 0;
    console.log(sumar);

}

// Esta es la forma de comprobar que un número es primo

// function analizadorPrimos(numero) {
//     for (let i = 2; i < numero; i++) {
//         if (numero % i == 0) {
//             return false;
//         }
//     } return true;
// }
// let numero = prompt("Dime un numero")
// console.log(analizadorPrimos(numero))
