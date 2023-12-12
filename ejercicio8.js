/**
 * 5.19
 * Escribe un programa con herencia de clases que prmita modelar
 * los objetos:
 * Telefono, Fijo, Movil
 * 
 * De manera que teléfono sea la clase madre y fijo y movil sean
 * 
 */


let Telefono = {
    color: "Negro",
    velocidad: "5G",
    numero: 690391020,
    costeComponentes: [100, 200, 35],
    
};



// Así mostramos todo lo heredado directamente de teléfono o de los nuevos atributos que queramos poner
let telefono1 = new Object(Telefono);
telefono1.color = "Verde";
telefono1.suma = telefono1.costeComponentes.reduce((acumulador, valorActual) => acumulador + valorActual, 0);


cantidadComponentes = telefono1.costeComponentes.length;
telefono1.costeMedioComponentes = telefono1.costeComponentes.reduce((acumulador, valorActual) => acumulador + valorActual, 0) /cantidadComponentes;
console.log(telefono1, Math.round(telefono1.costeMedioComponentes));


let TelefonoFijo = new Object(Telefono)
TelefonoFijo.tipoCable = "Reforzado de cobre";

console.log(TelefonoFijo)

























// ASI SE DECLARA LO MISMO PERO DE OTRA MANERA PARECIDA
let TelefonoCopia = new Object();
TelefonoCopia.colorCopia = "Blanco";
TelefonoCopia.velocidad = "4G";
TelefonoCopia.numero = "655457543";
TelefonoCopia.precio_Carcasa = 50;
TelefonoCopia.precio_ComponentesInternos = 100;
TelefonoCopia.precio_Camara =  1200;
