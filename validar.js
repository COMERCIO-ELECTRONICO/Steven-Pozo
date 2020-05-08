constjOI = require('joi')
const jsonPerson={
    nombre: Joi.string().min(2).max(10).required(),
    apeliido: Joi.string().min(3).max(30).required(),
    edad: Joi.number().integer(3).min(18).max(50),
}
const jsoValidacionPersona = Joi.object().keys()
.object()
.keys(jsonPersona)
.with('nombre','apellido')
const jsonPrueba = {
    nombre: 'steven',
    apellido: 'pozo'
}
Joi.validate(jsonPrueba, jsoValidacionPersona, (error, valor)=>{
    console.log(error);
    console.log(valor);
})