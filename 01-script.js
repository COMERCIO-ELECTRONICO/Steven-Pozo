// JSON -> JAVASCRIPT OBJECT NOTATION 
/* JSON 
LIGERO, INTERCAMBIA DATOS, FACIL ESCRITURA Y LECTURA
*/
// TIPO DE DATOS (NUMBER), STRING, BOOL 
// VAR - CONST -> 
var json = {
    nombre: 'Steven',
    edad: 22,
    soltero: true,
    fecha: new Date('1995/10/29'),
}

console.log(json.nombre)
console.log(json['edad'])

json.nombre = 'nuevo'
json.direccion = 'San Juan'

console.log(json)

delete json.direccion

console.log(json)

/*
console.error()
console.info()
console.warn()
*/