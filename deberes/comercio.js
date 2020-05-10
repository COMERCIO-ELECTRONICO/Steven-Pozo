//DEBER  PALABRA='COMERCIO ELECTRONICO',   invertir palabra
const reverseStr = (str) =>{
    return str.split('').reverse().join('');
};
//DEBER EJERCICIO 2
console.log(reverseStr('COMERCIO-ELECTRONICO'));
var texto = 'Realiza fotografías de 20 megapíxeles y puede utilizar un perfil de color Dlog-M de 10 bits, con el que se obtiene un rango dinámico más amplio al registrar hasta mil millones de colores. Esto queda bastante por encima de los 16 millones de colores de los perfiles de 8 bits, pudiendo dejar más margen y libertad en la edición posterior del material. Por su parte, el Mavic 2 Zoom cuenta con un sensor CMOS de 1/2,3 pulgadas y zoom óptico, lo cual da nombre al propio producto. En este caso es capaz de realizar capturas de 12 megapíxeles, disponiendo un zoom automático híbrido (que combina detección de fase y contraste) de una función de "Superresolución" que recurre al zoom óptico para realizar nueve fotografías y componer una sola con todas ellas de 48 megapíxeles (con más detalle).';
var palabra = texto.split(" ");  
var caracter1 = texto.split(".") 
var caracter2 =texto.split(",")
var primerap=palabra [0].toUpperCase();
var final = (JSON.parse(palabra.length)); 
var ultimap=palabra [final - 1].toUpperCase();

var Total= primerap;
console.log (primerap  ,  ultimap, );
var final = (JSON.parse(caracter1.length));
var total = final;
console.log (total);
var palabra = texto.split("."); 
var final = (JSON.parse(caracter2.length));
var total = final;
console.log (total );

 
  
