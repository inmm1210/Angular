"use strict";

function Suma(num1 : number, num2 : number): number{
return num1 + num2;
}
function Resta(num1 : number, num2 : number): number{
    return num1 - num2;
}
function Multiplica(num1 : number, num2 : number): number{
    return num1 * num2;
}
function Divide(num1 : number, num2 : number): number{
    return num1 / num2;
}

let MayorDeDosNumeros = (num1:number,num2:number):number =>{
    let mayor : number = 0;
    if (num1>num2){
        //console.log(`El numero mayor es ${num1}`);
        mayor = num1;
    }
    if (num2>num1){
        //console.log(`El numero mayor es ${num2}`);
        mayor = num2;
    }
    return mayor;
}
type Role = 'Admin' | 'User' |'SuperUser';
enum Departament { "MKT" ,'Finanzas','HR'};
function AgregaUsuario(name : string, rol : Role, dep : Departament):string{

    return `Hola ${name} tu usuario es ${rol}, y estas en el departamento ${dep}`;
}
let arrayAux : number[] =[1,2,3];
console.log(Suma(20,45));
console.log(Resta(50,48));
console.log(Multiplica(3,8));
console.log(Divide(100,2));
console.log(MayorDeDosNumeros(5,6));
console.log(AgregaUsuario('Maria','Admin',Departament.MKT));

