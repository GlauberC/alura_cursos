class NegociacaoController{
    constructor(){
        let $ = document.querySelector.bind(document); //substitui esse trecho de código por $ mantendo o documento como this.

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");

    }
    adiciona(event){
        event.preventDefault();

        let data = new Date(              
            ...this._inputData.value
                .split('-')
                .map((item, indice) => {
                    if(indice == 1){
                        return item - 1;
                    }
                    return item;
                })
        );
        console.log(data);

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
        //  Adicionar negociacao numa lista

    }
}