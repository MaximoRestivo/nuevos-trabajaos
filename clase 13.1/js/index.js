let minombre = "Maximo"
let alumnostostring = JSON.stringify(minombre)
localStorage.setItem("username", alumnostostring)
let recuperostorage = localStorage.getItem("username")
let alumnosRecuperados = JSON.parse(recuperostorage)

let peliculasfavoritas = ["pelicula1", "pelicula2", "pelicula3"]
let peliculasstring = JSON.stringify(peliculasfavoritas)
localStorage.setItem("peliculafavorita", peliculasstring)
let recuperostorage2 = localStorage.getItem("peliculafavorita")
let pelicularecuperada = JSON.parse(recuperostorage2)
pelicularecuperada.push("pelicula4")
let pelicularecuperada2
let peliculasstring2 =JSON.stringify(pelicularecuperada)
localStorage.setItem("peliculafavorita", (peliculasstring))

let got = [
    {
        nombre: "Jon",
        apellido: "Snow",
        edad: 23,
        ciudad: "Winterfell"
    },
    {
        nombre: "Daenerys",
        apellido: "Targaryen",
        edad: 19
    },
    {
        nombre: "Arya",
        apellido: "Stark",
        edad: 12,
        ciudad: "Winterfell"
    },
    {
        nombre: "Tyrion",
        apellido: "Lannister",
        edad: 32,
        ciudad: "Casterly Rock"
    }
];

let winterisComing = []
for (let i=0; i<got.length; i++){
    if ("Winterfell" == got[i].ciudad){
        winterisComing.push(got[i])
    }
}
let winterJSON = JSON.stringify(winterisComing)
localStorage.setItem("winterfell", winterJSON)
console.log(localStorage)