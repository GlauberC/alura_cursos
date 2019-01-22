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

        this._service = new NegociacaoService();
        this._init();
        
    }
    
    _init(){
        this._service
            .listar()
            .then(negociacoes => 
                negociacoes.forEach(negociacao =>
                    this._listaNegociacoes.adiciona(negociacao)))
            .catch(erro => this._mensagem.texto = erro);
        setInterval(() => {
            this.importaNegociacoes();
        }, 3000);
    }
    adiciona(event){
        event.preventDefault();
        let negociacao = this._criaNegociacao();
        this._service
            .cadastrar(negociacao)
            .then(mensagem => {
                this._listaNegociacoes.adiciona(negociacao);
                this._mensagem.texto = mensagem;
                this._limpaFormulario();
            })
            .catch(erro => this._mensagem.texto = erro);
    }
    importaNegociacoes(){
        this._service
            .importa(this._listaNegociacoes.negociacoes)
            .then(negociacoes => {
            negociacoes
                .reduce((arrayAchatado, array) => arrayAchatado.concat(array),[])
                .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao))
            })
            .catch(erro => this._mensagem.texto = erro);
    }

    apaga(){
        this._service
            .apagar()
            .then(mensagem => {
                this._mensagem.texto = mensagem;
                this._listaNegociacoes.esvazia();
            })
            .catch(erro => this._mensagem.texto = erro);
        }
    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }
    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = "0.0";
        this._inputData.focus();
    }
  
}