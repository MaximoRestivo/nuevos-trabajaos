alert("bienvenidos a mi sitio")

let pregunta = confirm("estas seguro de que queres avanzar?")

if (pregunta == true){
    document.querySelector(".saludo").innerText = "Qué alegría que quieras continuar tu visita"

} else{
    document.querySelector(".saludo").innerText = "Lamentamos que no quieras continuar tu visita"

}

let nombre = prompt("Nombre:")
document.querySelector("h1").innerText = "Bienvenido " + nombre

let edad = prompt("Edad: ")
if (edad>17){
    let programacion = confirm("te gusta la programacion?")
    if (programacion){
        document.querySelector(".background-img").innerHTML = "<img src='./img/programmer.jpeg'/>"
    }
    else{
        document.querySelector(".background-img").innerHTML = "<img src='./img/gatito.jpeg'/>"
    }

    let imagen = document.querySelector(".avatar")
    let nuevaImagen = prompt("link de su img: ")
    imagen.innerHTML = "<img src = "+ nuevaImagen +" />"

    let pelicula ={
        nombre: "",
        director: "",
        duracion: "",
        actor: "",
    }
}
else{
    document.querySelector(".container-general").style.display = "none";
    document.querySelector("#accesoDenegado").style.display = "block";
}