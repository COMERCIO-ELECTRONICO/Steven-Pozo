//tipo de datos
const nombre: string = 'Steven';
const numero: number= 1;
const bool: boolean = true;
const objetoUsuario:  object= {
    nombre:'Steven',
}
//arreglos
const arregloUno: Array<number> = [];
const  arregloDos: object[] = [];
// varios tipados
const nombreDos: String | number = 1
const arreglo1: Array<boolean | number> = [];
const arreglo2: (string | object)[]=[];

let variableLet: number ;
const variavleConts:number = 1;
//any
let cualquierVariable: any
function sumar(num1?: number, num2?: number):  number   {
    let a =2;
    let b = 3;
    if (num1){
        a= num1;
    }
    if (num2) {
        b= num2
    }
    return a+b;
};
sumar(5,5);
sumar(5);
sumar();
console.log(sumar(5,5));
console.log(sumar(5));
console.log(sumar());

class Persona {
    constructor(
        protected nombre?: string,
        public apellido?: string
    ) {

    }
}

const nnuevaPersona = new Persona()

class hijo extends Persona {
    constructor(
        protected nombre: string,
        public apellido: string,
    ) {
        super(nombre, apellido);
        this.apellido = apellido;
    }
}

const hijoPersona = new hijo('Steven ', 'jPozo');
console.log(hijoPersona);



