class FuncionariosController{
    constructor(){
        this._funcionariosView = new FuncionariosView(document.querySelector(".tabela"));
        this._funcionariosView.update(funcionarios);
    }
}