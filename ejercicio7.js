/* 7. Prototipo
    Crear funcion prototitopo
        nombre cuentaPobres, correo y saldo como atributos dni

        2 metodos uno que simule un ingreso y otro que simule un retiro
              ir sumando con += el atributo
 */


function cuentaPobres(correo, saldo, dni) {
    this.correo = correo;
    this.saldo = saldo;
    this.dni = dni;

    this.agregarIngreso = (dinero) => {
        this.saldo += dinero;
        return this.saldo;
    }

    this.retirarIngreso = (dinero) => {
        // Por si existe una condición que impida tener dinero negativo (es decir deudas)
        if ((this.saldo - dinero) <= 0) {
            return `No puedes sacar mas dinero`;
        }
        this.saldo -= dinero;
        return this.saldo;
    }

}


let persona1 = new cuentaPobres("ismaelTonto@gmail.com", 200, "tontodelnabo97L");

// Ismael pobre
console.log(persona1.retirarIngreso(200000));

// Ismael volando en villetes con V
console.log(persona1.agregarIngreso(20001232331)); /* Pasta */