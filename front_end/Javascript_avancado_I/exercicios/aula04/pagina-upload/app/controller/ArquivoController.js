class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        //cria um Arquivo com as suas propriedades;
        let informacao = this._inputDados.value.toUpperCase();
        let valido = InformacoesHelper.validaInformacao(informacao);
        if(valido){
            let arquivo = new Arquivo(...informacao.split('/'));
            console.log(arquivo);
            this._limpaFormulario();
        }else{
            alert("Deve estar no formato NOME/TAMANHO/TIPO como em NOME/10KB/JPG");
        }

        this._limpaFormulario();
        // exibe mensagem no console com os dados do arquivo.
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}