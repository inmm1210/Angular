interface ICuenta{
deposito(cantidad? : number) : number;
retiro (cantidad : number) : number;
consultarSaldo(): number;
}

class CuentaPersonal implements ICuenta{
    private cuenta: number =0;
    private tipo : string = '';
    constructor (ci : number, tp:string){
        this.cuenta = ci;
        this.tipo = tp;
    }
    
    
    deposito(cantidad : number){
        
        let total = this.cuenta + cantidad;
        return total;
    }

    retiro(cantidad : number){
        let total;
        
         total = this.cuenta - cantidad;
        
        return total;
    }
    consultarSaldo(){
        return this.cuenta;
    }
}

class CuentaEmpresarial implements ICuenta{
    private cuenta: number =0;
    private tipo : string = ' ';
    constructor (ci : number, tp:string){
        this.cuenta = ci;
        this.tipo = tp;
    }
    
    
    deposito(cantidad : number){
        
        let total = this.cuenta + cantidad;
        return total;
    }

    retiro(cantidad : number){
        let total;
        
         total = this.cuenta - cantidad;
        
        return total;
    }
    consultarSaldo(){
        return this.cuenta;
    }
}

interface ICuentaDeCredito extends ICuenta{
    calculaIntereses(saldo : number):number;
}

class TarjetaDeCredito implements ICuentaDeCredito{
    private cuenta: number =0;
    constructor (ci : number){
        this.cuenta = ci;
      
    }
    deposito(cantidad : number){
        
        let total = this.cuenta + cantidad;
        return total;
    }

    retiro(cantidad : number){
        let total;
        
         total = this.cuenta - cantidad;
        
        return total;
    }
    consultarSaldo(){
        return this.cuenta;
    }
calculaIntereses(saldo : number){
    let interes = .5;
    return saldo * interes;
}
}

let tarjeta = new TarjetaDeCredito(2000);
console.log(tarjeta.consultarSaldo());