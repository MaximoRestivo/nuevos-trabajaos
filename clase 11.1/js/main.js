// completar las variables para que el programa funcione

window.addEventListener('load', function() {

    //capturar HTML 
    let titulo = document.querySelector("#titulo");
    titulo.addEventListener("mouseover",function () {
        let nombre = prompt("como te llamas?")
 
 
   let saludo = document.querySelector("#saludo");
   console.log(saludo);
   
   if (nombre === undefined) {
    saludo.innerText = "BIEVENID@ USUARIO"
   } 
   else {
    saludo.innerText = "BIENVENID@ " + nombre
    saludo.style.textTransform = "uppercase"
   }

   titulo.style.display = "none";
   let span = document.querySelector("span")
   span.style.display = "block";


   span.addEventListener("click",function () {
        let bienvenida = document.querySelector(".bienvenida")
        bienvenida.style.display = "none"
        let personajes = document.querySelector(".personajes")
        personajes.style.display = "flex";
   })


   let bart = document.querySelector("#bart")
   let lisa = document.querySelector("#lisa")
   let homero = document.querySelector("#homero")
   let marge = document.querySelector("#marge")
   let maggie = document.querySelector("#maggie")
   let milhouse = document.querySelector("#milhouse")
   let burns = document.querySelector("#burns")
   let bobpatinio = document.querySelector("#bobpatinio")
   let flanders = document.querySelector("#flanders")
   let duffman = document.querySelector("#duffman")
   let gorgory = document.querySelector("#gorgory")
   let nelson = document.querySelector("#nelson")


   bart.addEventListener("click", function(){
    console.log(bart)
   })
   lisa.addEventListener("click", function(){
    console.log(lisa)
   })
    homero.addEventListener("click", function(){
    console.log(homero)
   })
    marge.addEventListener("click", function(){
    console.log(marge)
   })
    maggie.addEventListener("click", function(){
    console.log(maggie)
   })
    milhouse.addEventListener("click", function(){
    console.log(milhouse)
   })
    burns.addEventListener("click", function(){
    console.log(burns)
   })
    bobpatinio.addEventListener("click", function(){
    console.log(bobpatinio)
   })
    flanders.addEventListener("click", function(){
    console.log(flanders)
   })
    duffman.addEventListener("click", function(){
    console.log(duffman)
   })
    gorgory.addEventListener("click", function(){
    console.log(gorgory)
   })
    nelson.addEventListener("click", function(){
    console.log(nelson)
   })
 
    // span = ;
 
    /* Capturar pesonajes + Asignarles a cada uno su evento correspondiente, 
    así como también su funcionalidad */
    

    /* Asignarle evento a la variable boton */
    //let boton = ;
 
 
 }) 
  }) 