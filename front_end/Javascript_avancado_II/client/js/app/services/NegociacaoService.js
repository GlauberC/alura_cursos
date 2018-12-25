class NegociacaoService{
    constructor(){
        this._http = new HttpService();
    }
    obterNegociacaoDaSemana(){
        return new Promise((resolve, reject) => {
            this._http
                .get('negociacoes/semana')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                })
                .catch(erro => {
                    console.log(erro)
                    reject("Não foi possível obter as negociações da semana");

                })
        });
    }
    obterNegociacaoDaSemanaAnterior(){
        return new Promise((resolve, reject) => {
            this._http
                .get('negociacoes/anterior')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                })
                .catch(erro => {
                    console.log(erro)
                    reject("Não foi possível obter as negociações da semana anterior");

                })
        });
    }
    obterNegociacaoDaSemanaRetrasada(){
        return new Promise((resolve, reject) => {
            this._http
                .get('negociacoes/retrasada')
                .then(negociacoes => {
                    resolve(negociacoes.map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)))
                })
                .catch(erro => {
                    console.log(erro)
                    reject("Não foi possível obter as negociações da semana retrasada");

                })
        });
    }
}