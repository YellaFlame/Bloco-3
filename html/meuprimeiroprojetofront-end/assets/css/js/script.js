
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
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector("#assunto")
    if(assunto.value.length < 30){
        txtAssunto.innerHTML = "Escreva um Assunto de no minimo 100 caracteres"
        txtAssunto.style.color = "red"
    } else {
        txtAssunto.innerHTML = "Obrigado!"
        txtAssunto.style.color = "green"
    }
}
