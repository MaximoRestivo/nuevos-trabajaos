let misDatos = {
    nombre: "Maximo",
    apellido: "Restivo",
    edad: "19",
    dni: "47129104",
    comidafavorita: ["tasty", "bigmac", "pajaro"],
    saludar: function(){
        return "Hola mi nombre es" + this.nombre + this.apellido + "y tengo" + this.edad + " años" +" Mi comida favorita favorita es " + this.comidafavorita
    }
}
console.log(misDatos.saludar)

let auto = {
    marca: "honda",
    modelo: "CRV",
    año: "1998",
    color: "negra",
    posicion: 0,
    avanzar: function(n){
        this.posicion = this.posicion + n
    },

    retroceder: function(n){
        this.posicion = this.posicion + n
    }
    
}
auto.avanzar(5)
auto.avanzar(4)
console.log(auto.posicion)

len nuevoauto = {
    marca: "honda",
    modelo: "crv",
    año: "1998",
    color: "negra",
    posicion: 0,
    moverse: function(n){
        return this.posicion = this.posicion + n
    }
}
    nuevoauto.moverse(5)
    nuevoauto.moverse(-3)
    console.log(nuevoauto.posicion)

    let ironman = {
        nombre: "ironman",
        equipo: "avengers",
        poderes: ["volar", "lanzar misiles", "disparar laser"],
        energia : 100,
        getpoder: function(n){
            this.energia = this.energia -10
            return "poder elegido de " + this.nombre + this.poderes[n] + "energia restante: " + this.energia
        }
    }

    let hulk={
        nombre:"hulk",
        equipo:"avengers",
        poderes: ["aplastar", "gritar", "golpear"],
        energia: 100,
        getpoder: function(n){
            this,energia = this.energia-10
            return "poder elegido de " + this.nombre + this.poderes[n] + "energia restante: " + this.energia
        }
    }

    console.log(ironman.getpoder(0))
    console.log(hulk.getpoder(1))
    console.log(ironman.getpoder(2))

