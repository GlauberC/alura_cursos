var tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", function(event){
    var alvoEvento = event.target;              // td
    var paiAlvoEvento = alvoEvento.parentNode;  // tr
    
    paiAlvoEvento.classList.add("fadeOut");
    
    setTimeout(function(){
        paiAlvoEvento.remove();
    }, 500);
    

});
