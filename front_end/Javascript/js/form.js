var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector(".form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);
    
    novaTr = criaTr(paciente);
    document.querySelector("#tabela-pacientes").appendChild(novaTr);
    form.reset();
});

function obtemPacienteDoFormulario(form){
    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };
    return paciente;
}

function criaTr(paciente){
    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente");

    var nomeTd = document.createElement("td")
    var pesoTd = document.createElement("td")
    var alturaTd = document.createElement("td")
    var gorduraTd = document.createElement("td")
    var imcTd = document.createElement("td")

    nomeTd = criaTd(paciente.nome, "info-nome");
    alturaTd = criaTd(paciente.altura, "info-altura");
    pesoTd = criaTd(paciente.peso, "info-peso");
    gorduraTd = criaTd(paciente.gordura, "info-gordura");
    imcTd = criaTd(paciente.imc, "info-imc");
 
    

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
    
}
function criaTd(dado, classe){
    var td = document.createElement("td")
    td.textContent = dado
    td.classList.add(classe);
    return td
}