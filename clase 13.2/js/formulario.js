let formulario = document.querySelector(".contact-form")
let nombre = document.querySelector("#fullname")
let mail = document.querySelector("#email")
let tel = document.querySelector("#phone")
let contra = document.querySelector("#password")
let recontra = document.querySelector("#rePasword")

let ErorN = document.querySelector(".invalid-feedback fullName")
let errorM = document.querySelector(".invalid-feedback email")
let errorT = document.querySelector(".invalid-feedback phone")
let errorC = document.querySelector(".invalid-feedback password")
let errorRC = document.querySelector(".invalid-feedback rePassword")

formulario.addEventListener("submit", function(event){
    event.preventDefault()
    if(nombre.value == "" || mail.value == "" || (tel.value).length < 3 || (contra.value).length < 3 ||contra.value != recontra.value){
        if(nombre.value == ""){
            errorN.innerHTML = <p>no puede estar vacio</p>
        }
    }
})