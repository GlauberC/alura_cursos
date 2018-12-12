class NegociacaoController{
    constructor(){
        let $ = document.querySelector.bind(document); //substitui esse trecho de código por $ mantendo o documento como this.

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        this._listaNegociacoes = new ListaNegociacoes();

    }
    adiciona(event){
        event.preventDefault();

        //  Adicionar negociacao numa lista
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
    }
    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = "0.0";
        this._inputData.focus();
    }
}