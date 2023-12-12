/**
 * prompt ingresar nombre apellido ciclo que cursa y mostrar todos en el html , texto por defecto "algo"
 * tambien puede ser que pida ponerlo en el promopt
 */

'use strict'
var nombre = prompt("Introduce el nombres:", "Pablo");

var apellido = prompt("Introduce el apellido:", "Hidalgo");

var ciclo = prompt("Introduce el ciclo que estudias:", "DAW");


// Forma Ismael
// var div = document.getElementById("div"); 
// div.innerHTML = `<b> Bienvenido ${nombre} ${apellido}, estas estudiando ${ciclo} </b>`


//Forma Eliceo
// document.getElementById("div").innerHTML = `<b> Bienvenido ${nombre} ${apellido}, estas estudiando ${ciclo} </b>`;