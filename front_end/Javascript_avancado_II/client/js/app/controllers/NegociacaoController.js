class NegociacaoController{
    constructor(){
        let $ = document.querySelector.bind(document); //substitui esse trecho de código por $ mantendo o documento como this.

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
        
        //this._listaNegociacoes = new ListaNegociacoes(model => this._negociacoesView.update(model));
        this._listaNegociacoes = new Bind(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona', 'esvazia');      

        // this._mensagemView.update(this._mensagem);
        this._mensagem = new Bind(
            new Mensagem(),
            new MensagemView($("#mensagemView")),
            'texto');
    }
    adiciona(event){
        event.preventDefault();

        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociação adicionada com sucesso';

        // this._negociacoesView.update(this._listaNegociacoes);
        // this._mensagemView.update(this._mensagem);
        this._limpaFormulario();
    }
    importaNegociacoes(){
        let service = new NegociacaoService();
        service.obterNegociacaoDaSeamana((erro, negociacoes) => {
            if(erro){
                this._mensagem.texto = erro;
            }else{
                negociacoes.forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
                this._mensagem.texto ="Negociações importadas com sucesso";
            }
        });
    }
    apaga(){
        this._listaNegociacoes.esvazia();
        // this._negociacoesView.update(this._listaNegociacoes);
        this._mensagem.texto = 'Negociações apagadas com sucesso';
        // this._mensagemView.update(this._mensagem);
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