var arregloJsons = [{
    nombre: 'Steven',
    edad: 24,
    fechaNacimiento: new Date(),
    telf: 08765433456
}]

var usuarioNuevo = {
    nombre: 'Juan',
    edad: 35,
    fechaNacimiento: new Date(),
    telf: 9876544567
}

function crearUsuario(arreglo, usuarioACrear, cb) {
    var usuarioEncontrado = arreglo
        .find(
            (item) => {
                return item.nombre === usuarioACrear.nombre
            })
    // console.log(usuarioEncontrado);
    if (usuarioEncontrado !== undefined) {
        arreglo.push(usuarioACrear)
        cb({
            mensaje: 'Usuario creado',
            usuario: usuarioACrear,
            arreglo
        })
    } else {
        cb({
            mensaje: 'Usuario existe',
            usuario: usuarioACrear,
            arreglo
        })
    }
}

crearUsuario(arregloJsons, usuarioNuevo, (respuestaCallback) => {
    console.log(`mensaje: ${respuestaCallback.mensaje}, usuario: ${respuestaCallback.usuario}`)
    console.log(respuestaCallback.arreglo)
})
function eliminarUsuario(arreglo, nombreUsuario, cb) {

    var indiceUsuario = arreglo
        .findIndex(
            (item) => {
                return item.nombre === nombreUsuario
            })
    console.log(indiceUsuario);
    if (indiceUsuario !== -1) {
        arreglo.splice(indiceUsuario, 1)
        cb({
            mensaje: 'eliminado'
        })
    } else {
        cb({
            mensaje: 'eliminado no'
        })
    }

}

eliminarUsuario(arregloJsons, 'kevin', (resultadoCallback) => {
    console.log(resultadoCallback)
    console.log(arregloJsons)
})
console.log(arregloJsons)