
/*
Case Sensitive = reconheco letras minusculas e maiusculas
/*
por Gag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementBysClassName()
por Seletor: querySelector()
*/

let nome = document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOK = false
let assuntoOk = false
let mapa = document.querySelector("#mapa")

nome.style.width = "100%"
email.style.width = "100%"
assunto.style.width = "100%"

function validaNome(){
    let txtNome = document.querySelector("#txtNome")
    if(nome.value.length< 3 ){
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        let nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtEmail")
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail Inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "E-mail Válido"
        txtEmail.style.color = "green"
        let emailOK = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = "Texto muito grande, digite no maximo 100 caracteres"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
    } else {
       txtAssunto.style.display = "none"
       let assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOK == true && assuntoOk == true){
        alert("Formulario enviado com sucesso!")
    } else {
        alert ("Verificar se todos os campos foram preenchidos corretamnte...")
    }
}

function mapaZoom(){
    mapa.style.width = "700px"
    mapa.style.height = "500px"
}

function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "300px"
}
