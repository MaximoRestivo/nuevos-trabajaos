let filosofohipster ={
    nacionalidad: "argentina",
    profesion: "musico",
    camina: 2,
}

let nacionalidadU = prompt("nacionalidad")
let profesionU = prompt("profesion")
let caminaU = prompt("cuantos kilometros caminas")

function sosfilosofohipster(na, pro, cam){
    if (na = filosofohipster.nacionalidad && pro == filosofohipster.profesion && cam>= filosofohipster.camina){
        return "soy filosofo hipster"
    }
    else{
        return "aun no soy filosofo hipster"
    }
}

console.log(sosfilosofohipster(nacionalidadU,profesionU,caminaU))