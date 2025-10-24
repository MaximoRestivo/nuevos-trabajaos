let nombre = prompt ('como te llamas?')
console.log(nombre)

let edad = prompt('edad')
console.log(edad)

let fandeportes = confirm('te gustan los deportes?')
console.log(fandeportes)

alert('muchas gracias' + nombre + 'por responder')

let usuario ={
    nombreU: nombre,
    edadU: edad,
    deportesU: fandeportes,
    deportistaprofesional: function(){
        if (this.deportesU){
            return'soy fan de los deportes'
        }
        else{
            return'no soy tan fan de los deportes'
        }
    }

}

console.log(usuario.deportistaprofesional())