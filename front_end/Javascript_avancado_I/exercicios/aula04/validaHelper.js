class ValidaHelper{

    constructor (){
        throw "sem metodos construtores";
    }
    static validaCodigo(codigo){
        if(/\D{3}-\D{2}-\d{2}/.test(codigo)) {
            alert(`"${codigo}" é um codigo válido`)
        } else {
            alert(`"${codigo}" não é um codigo válido`);
        }
    }
}




function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}