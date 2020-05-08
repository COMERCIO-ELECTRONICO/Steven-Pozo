const EventEmiter = require('events')
class entrarALaCasa extends EventEmiter  {}
const entrarCasa = new entrarALaCasa()
// evento que escucha 
//on
entrarCasa.on(nombreEvento, (nombre) => {
    console.log(`saludar a ${nombre}, que ingreso por la puerta de adelante`);
})

// evento que emite
// EMIT
entrarCasa.emit(nombreEvento, 'Steven')

