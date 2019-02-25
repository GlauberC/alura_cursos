import React, {Component} from 'react';
import $ from 'jquery';
import PubSub from 'pubsub-js';
import InputCustomizado from './componentes/InputCustomizado';
import ButtonSubmit from './componentes/ButtonSubmit';
import TratadorErros from './TratadorErros';

var URL = "http://localhost:3001/autores"
// var URL = "http://cdc-react.herokuapp.com/api/autores"


class FormularioAutor extends Component{
    constructor(){
        super();
        this.state = {nome:'',email:'',senha:''};
        this.enviaForm = this.enviaForm.bind(this);
        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setSenha = this.setSenha.bind(this);
    }

    enviaForm(evento){
        evento.preventDefault();
        $.ajax({
            url:URL,
            contentType:'application/json',
            dataType:'json',
            type:'post',
            data: JSON.stringify({nome:this.state.nome,email:this.state.email,senha:this.state.senha}),
            success:function(novaListagem){
                console.log("Enviado com sucesso");
                PubSub.publish('atualiza-lista-autores',novaListagem);
                this.setState({nome:'',email:'',senha:''})
            }.bind(this),
            error: function(resposta){
                console.log("erro ao tentar enviar os dados");
                if(resposta.status === 400){
                    new TratadorErros().publicarErros(resposta.responseJSON);
                }
            },
            beforeSend: function(){
                PubSub.publish("limpa-erros",{});
            }

        });
    }

    setNome(evento){
        this.setState({nome:evento.target.value})
    }
    setEmail(evento){
        this.setState({email:evento.target.value})
    }
    setSenha(evento){
        this.setState({senha:evento.target.value})
    }

    render(){
        return(
            <div className="pure-form pure-form-aligned">
                <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
                  <InputCustomizado id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} label="Nome"></InputCustomizado>
                  <InputCustomizado id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} label="Email"></InputCustomizado>
                  <InputCustomizado id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha} label="Senha"></InputCustomizado>
                  
                  <ButtonSubmit></ButtonSubmit>
                </form>             

            </div>
        );
    }
}

class TabelaAutores extends Component{
    render(){
        return (
            <div>            
                <table className="pure-table">
                <thead>
                    <tr>
                    <th>Nome</th>
                    <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    this.props.lista.map(function(autor){
                        return(
                        <tr key={autor.id}>
                        <td>{autor.nome}</td>
                        <td>{autor.email}</td>
                        </tr>
                        );
                    })
                    }
                </tbody>
                </table> 
            </div>    
            );
    }
}
export default class AutorBox extends Component{
    constructor(){
        super();
        this.state = {lista: []};
        this.atualizaListagem = this.atualizaListagem.bind(this);
    }
    componentDidMount(){
        $.ajax({
            url: URL,
            dataType: 'json',
            success: function(res){
                this.setState({lista:res});
            }.bind(this)
        })
        PubSub.subscribe('atualiza-lista-autores', (topico, novaLista) =>{
            this.setState({lista:novaLista})
        });
    }
    atualizaListagem(novaLista){
        this.setState({lista:novaLista});
    }
    
    render(){
        return(
            <div>
                <FormularioAutor></FormularioAutor>
                <TabelaAutores lista={this.state.lista}></TabelaAutores>
            </div>
        );
    }
}