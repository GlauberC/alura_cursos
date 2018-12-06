var campoFiltro = document.querySelector(".filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente")
    digitado = this.value;
    
    var expressao = new RegExp(digitado, "i")

    if(digitado.length > 0){
        pacientes.forEach(function(paciente){
            var nome = paciente.querySelector(".info-nome").textContent;
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel")
            }else{
                paciente.classList.remove("invisivel")
            }
        });
    }else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");
        })
    }
    
})