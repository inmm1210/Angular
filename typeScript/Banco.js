"use strict";
class CuentaPersonal {
    constructor(ci, tp) {
        this.cuenta = 0;
        this.tipo = '';
        this.cuenta = ci;
        this.tipo = tp;
    }
    deposito(cantidad) {
        let total = this.cuenta + cantidad;
        return total;
    }
    retiro(cantidad) {
        let total;
        total = this.cuenta - cantidad;
        return total;
    }
    consultarSaldo() {
        return this.cuenta;
    }
}
class CuentaEmpresarial {
    constructor(ci, tp) {
        this.cuenta = 0;
        this.tipo = ' ';
        this.cuenta = ci;
        this.tipo = tp;
    }
    deposito(cantidad) {
        let total = this.cuenta + cantidad;
        return total;
    }
    retiro(cantidad) {
        let total;
        total = this.cuenta - cantidad;
        return total;
    }
    consultarSaldo() {
        return this.cuenta;
    }
}
class TarjetaDeCredito {
    constructor(ci) {
        this.cuenta = 0;
        this.cuenta = ci;
    }
    deposito(cantidad) {
        let total = this.cuenta + cantidad;
        return total;
    }
    retiro(cantidad) {
        let total;
        total = this.cuenta - cantidad;
        return total;
    }
    consultarSaldo() {
        return this.cuenta;
    }
    calculaIntereses(saldo) {
        let interes = .5;
        return saldo * interes;
    }
}
let tarjeta = new TarjetaDeCredito(2000);
console.log(tarjeta.consultarSaldo());
