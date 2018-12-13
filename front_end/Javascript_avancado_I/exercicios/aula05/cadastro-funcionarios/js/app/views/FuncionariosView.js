
    class FuncionariosView{
        constructor(elemento){
            this._elemento = elemento;
            
            
        }

        _template(model){
            return `<table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Endereço</th>
                    <th>Salário</th>
                </tr>
            </thead>
    
            <tbody>
                ${
                    model.map(n => `
                        <tr>
                            <td>${n.nome}</td>
                            <td>${n.endereco}</td>
                            <td>${n.salario}</td>
                        </tr>
                        `
                    ).join('')
                }
            <tbody>
        </table>`

        }

        update(model){
            this._elemento.innerHTML = this._template(model);
        }
    }