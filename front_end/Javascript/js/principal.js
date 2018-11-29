// Mudança do título
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


// Calculo do IMC
var paciente = document.querySelector("#paciente1");
altura = paciente.querySelector(".info-altura").textContent;
peso = paciente.querySelector(".info-peso").textContent;


// Checagem do peso e altura
if(peso <= 0 || peso >= 300){
    console.log("Peso inválido");
    paciente.querySelector(".info-imc").textContent = "Peso Inválido"
}else if (altura <= 0 || altura >= 3.00){
    console.log("Altura inválida");
    paciente.querySelector(".info-imc").textContent = "Altura Inválida"
}else{
    imc = peso / altura ** 2;
    paciente.querySelector(".info-imc").textContent = imc;
}


