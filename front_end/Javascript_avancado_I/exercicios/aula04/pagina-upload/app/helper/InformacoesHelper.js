class InformacoesHelper{
    constructor(){
        throw "Sem construtor, somente metodos estáticos";
    }
    static validaInformacao(texto){
        console.log(texto)
        return /\w+\/\d+\w{2}\/\w+/.test(texto);
    }
}