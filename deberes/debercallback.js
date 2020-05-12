//Añadir Usuarios 
var json={
    arregloU : {
datos : [
    'Steven','24','29-enero','098765473'
]
    }
}
var nombreU = ' '
var edadU = ' '
var fechaU = ' '
var tlfU= ' '

function anadirUsuario(arregloU, usuario, indice, cb) {
    arregloU[indice] = usuario
    cb(
        {
            mensaje: '',
            arregloU
        }
    )
}
anadirUsuario(json.arregloU.usuario,(mensaje) => {
    console.log(mensaje);
});


//Listar Datos
function listarUsuario(arregloU,cb) {
    
      arregloU.forEach((usuario) => {
      console.log(usuario);
    });
    cb({
        mensaje: "lista de  los Usuario",
      })
  }
  listarUsuario(json.arregloU.usuario, (respuestaMensaje) => {
    console.log(respuestaMensaje);
  });


  //editar usuario
  var EditnombreU = ' '
var EditedadU = ' '
var EditfechaU = ' '
var EdittlfU= ' '
  function editarDatosUsuriario(arregloU,nombre,edad,fecha,tlf, indice,indice1,indice2,indice3, cb) {
    arregloU[indice] = nombre
    arregloU[indice1] = edad
    arregloU[indice2] = fecha
    arregloU[indice3] = tlf
    cb({
        mensaje: "Datos Editados",
        arregloU
    }
    )
}
  
editarDatosUsuriario(json.arregloU.usuario,EditnombreU,EditedadU,EditfechaU,EdittlfU,0,1,2,3, (mensaje) => {
    console.log(mensaje);
});


//eliminar datos
function eliminarDatosUsuarios(arregloU,nombre,edad,fecha,tlf,indice,indice1,indice2,indice3, cb) {
    arregloU[indice] = nombre
    arregloU[indice1] = edad
    arregloU[indice2] = fecha
    arregloU[indice3] = tlf
    cb({
        mensaje: "Datos Eliminados",
        arregloU
    }
    )
}
eliminarDatosUsuarios(json.arregloU.usuario," ", " ", " ", " ",0,1,2,3,(mensaje) => {
    console.log(mensaje);
});

