var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); // Impede que a página recarregue devido à estrutura do form

    var form = document.querySelector(".form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);
    
    novaTr = criaTr(paciente);

    // Validação
    erros = validaPaciente(paciente)
    console.log(erros);
    if(erros.length > 0){
        exibeMensagemsDeErro(erros);
        return;
    }else{
        document.querySelector(".mensagens-erro").innerHTML = "";  // Zerar a HTML
        var tabela = document.querySelector("#tabela-pacientes")
        tabela.appendChild(novaTr)
        form.reset();
    }

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

function validaPaciente(paciente){
    var erros = [];
    if(!validaNome(paciente.nome)){
        erros.push("Nome inválido")
    }
    if(!validaPeso(paciente.peso)){
        erros.push("O peso do paciente é inválido");
    }
    if(!validaAltura(paciente.altura)){
        erros.push("A altura do paciente é inválida");
    }
    if(!validaGordura(paciente.gordura)){
        erros.push("A porcentagem de gordura do paciente é inválida")
    }
    return erros;
}
function exibeMensagemsDeErro(erros){
    var ul = document.querySelector(".mensagens-erro");
    ul.innerHTML = "";  // Zerar a HTML
    erros.forEach(function(erro){
        var li = document.createElement("li")
        li.textContent = erro;
        ul.appendChild(li);
    });
}