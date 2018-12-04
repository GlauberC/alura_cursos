
// Mudança do título
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";


// Calculo do IMC
// var paciente = document.querySelector("#paciente1");
var paciente = document.querySelectorAll(".paciente");

for(var i = 0; i< paciente.length; i++){
    altura = paciente[i].querySelector(".info-altura").textContent;
    peso = paciente[i].querySelector(".info-peso").textContent;

    // Checagem do peso e altura
    if(peso <= 0 || peso >= 300){
        console.log("Peso inválido");
        paciente[i].querySelector(".info-imc").textContent = "Peso Inválido";
        paciente[i].classList.add("paciente-invalido");
    }else if (altura <= 0 || altura >= 3.00){
        console.log("Altura inválida");
        paciente[i].querySelector(".info-imc").textContent = "Altura Inválida";
        paciente[i].classList.add("paciente-invalido");
    }else{
        imc = calculaImc(peso, altura);
        paciente[i].querySelector(".info-imc").textContent = imc;
    }
}

function calculaImc(peso, altura){
    var imc = 0 ;
    imc = peso / altura ** 2;
    return imc.toFixed(2); 

}


