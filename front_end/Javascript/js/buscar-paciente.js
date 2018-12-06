var botaoBuscar = document.querySelector("#buscar-paciente");
botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load",function(){
        var erroAjax = document.querySelector(".erro-ajax")
        
        if(xhr.status == 200){
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            erroAjax.classList.add("invisivel");
            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            erroAjax.textContent = "Erro: " + xhr.status + " - " + xhr.responseText;
            erroAjax.classList.remove("invisivel");
        }

    });
    xhr.send();
});