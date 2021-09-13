var myBoolean : boolean = true;
var myNumber : number =1234;
var myStringArray : string[] = [`first`,`second`,`third`];
let flag : boolean = false;
let dato : any ='dato cadena';
console.log(dato);
dato = 1000;
console.log(dato);
dato = true;
console.log(dato);

type Animal = 'Cheetah' | 'Lion' |'Turtle';

const prueba : Animal = "Turtle";

enum Brands { Chevrolet, Cadillac, Ford, Buick, Chrysler, Dodge
};
 let carro : Brands = Brands.Ford;

 function SaludaAlUsuario() : void{
     console.log('Hola usuario');
 }

 let marca = 'Bachoco';

 function SumaDeNumeros(num1 : number, num2? : number): number;
function SumaDeNumeros(numeros:number[], num2?:number): number;
function SumaDeNumeros(num1:any,num2?:number):number{
    let suma = 0;
    if (Array.isArray(num1)){

    }
    return suma;
}

function hello(names: string): string;
function hello(names: string[]): string;
function hello(names: any, greeting?: string): string {
    let namesArray: string[];
    if (Array.isArray(names)) {
        namesArray = names;
    } else {
        namesArray = [names];
    }
    if (!greeting) {
        greeting = 'Hello';
    }
    return greeting + ', ' + namesArray.join(' and ') + '!';
}

function add(a:string, b:string): string;
function add(a:string, b:string): number;
function add(a:string, b:string): any{
    return a+b;
}

class Persona {
    private nombre : string = '';
    private apellidoPaterno : string = '';
    private apellidoMaterno:string ='';

    constructor (n:string, ap:string, am:string, private mayorDeEdad:boolean){
        this.nombre = n;
        this.apellidoPaterno = ap;
        this.apellidoMaterno = am;
    }

    getINE(){
        return this.mayorDeEdad?"Puedes tramitar el INE":"No se le puede asignar INE";
    }
}

interface IFiguraGeometrica{
    color : string;
    diametro?:number;
    calculaArea():number;
}

class Rectangulo implements IFiguraGeometrica{
    private base : number = 0;
    private altura : number = 0;
     color : string = 'Rojo';
     calculaArea(){
         return this.base*this.altura;
     }
}

class Triangulo implements IFiguraGeometrica{
    private base : number = 0;
    private altura : number = 0;
    color : string = 'Azul';
    calculaArea(){
        return (this.base*this.altura) / 2;
    }
}

class TrianguloIsoceles extends Triangulo{
    
}

class trianguloEscaleno extends Triangulo{

}

class Circulo implements IFiguraGeometrica{
color:string="Verde";
diametro:number=10;
calculaArea(){
    return (this.diametro/2)*Math.PI;
}
}

let miTriangulo:TrianguloIsoceles = new TrianguloIsoceles(); // oooo  let miTriangulo = new TrianguloIsoceles();
miTriangulo.color = "Verde";
miTriangulo.calculaArea();

