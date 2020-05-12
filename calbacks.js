//API, rest API
// Pprogramacion funcional 
/*function programacionFuncional(numero, () => {}, 1){
}*/
/*function primeraFuncion(){
    setTimeout(
        ()=>{
            console.log('primera')
        }, 500
    )
}
function segundaFuncion(){
    console.log('2')
}
    //primeraFuncion()
    //segundaFuncion()
    function saluda(nombre, callback){
        console.log(' saludo a', nombre)      
    }
function functionCallback(){
    primeraFuncion(
    segundaFuncion()
    )
    consol.log('ya saludo')
}
saluda('Steven', ()=>{
console.log('saludaste')
})
function saludar(nombre){
    console.log(`ejecuto saludo a ${nombre}`)
    return nombre
}
function peticionUsuario(nombre,callback){
    callback(nombre)
}
peticionUsuario('Steven', saludar)
peticionUsuario('Steven',(saludar)=>{
    console.log(sludar);
})*/
var arreglo =[]
var nombreNuevo1= 'juan'
var nombreNuevo2= 'pablo'
var nombreNuevo2= 'carlos'

function añadirNombre(arreglo, nombre, cb) {
    arreglo.push(nombre);
    cb(
        {
        mensaje: 'exito',
        arreglo
    }
    )
}
añadirNombre(arreglo, ' Steven',  (mensaje)=>{
    console.log(mensaje);
})
/*var arregloUsuario = [1, 2, 3, 4, 5]

function listarUsuario(arreglo, cb) {
    arreglo
        .forEach(
            usuario => {
                console.log(usuario);
            });
    cb({
        mensaje: 'lista de usuario'
    })
}

listarUsuario(arregloUsuario, (respuestaMensaje) => {
    console.log(respuestaMensaje);
})*/

    