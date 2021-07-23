let nome = document.getElementById("nome")
let sobrenome = document.getElementById("sobrenome")
let cidade = document.getElementById("cidade")
let nomeOk = false
let cidadeOk = false
let sobrenomeOk = false

nome.style.width = "80%"
sobrenome.style.width = "80%"
cidade.style.width = "80%"

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
function validaSobrenome(){
    let txtSobrenome = document.querySelector("#txtSobrenome")
    if(sobrenome.value.length < 4 ){
        txtSobrenome.innerHTML = "Sobrenome Inválido"
        txtSobrenome.style.color = "red"
    } else {
        txtSobrenome.innerHTML = "Sobrenome Válido"
        txtSobrenome.style.color = "green"
        let sobrenomeOk = true
    }
}
function validaCidade(){
    let txtCidade = document.querySelector("#txtCidade")
    if(cidade.value.length < 6 ){
        txtCidade.innerHTML = "Cidade Inválida"
        txtCidade.style.color = "red"
    } else {
        txtCidade.innerHTML = "Cidade Válida"
        txtCidade.style.color = "green"
        let cidadeOk = true
    }
}

function enviar(){
    if(nomeOk == true && sobrenomeOk == true && cidadeOk == true){
        alert("Formulario enviado com sucesso!")
    } else {
        alert("Verificar se todos os campos foram preenchidos corretamnte...")
    }
}