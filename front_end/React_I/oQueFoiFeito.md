# Aula1

## Passos para a instalação do Node
- Acesse https://nodejs.org/en/
- Clique no botão de dowload para a versão 6.X do Node.
- Você também pode acessar o menu downloads, em cima da página e escolher uma opção específica.
- Siga os passos do instalador
- Também existe uma explicação no curso de Node => https://cursos.alura.com.br/course/node-js/section/1/task/8

## Instalação do create-react-app
- Escolha uma pasta de sua preferência e crie, dentro dela, uma outra pasta chamada projetos-javascript
- Execute o comando npm install create-react-app@0.5.0, caso esteja no mac ou linux. Está usando windows? Leia a próxima opção.
- No windows, depois de instalado local, o create-react-app apresentou um erro na hora da criação do projeto. Então, para evitar dores de cabeça, instale ele global na sua máquina com o comando npm install -g create-react-app@0.5.0 .

## Observação importante 
- Caso você opte por instalar uma versão mais nova do create-react-app e, consequentemente uma versão mais nova do react, pode ser que apareça uma mensagem de warning no seu projeto.
Warning: Accessing PropTypes via the main React package is deprecated. Use the prop-types package from npm instead.
Warning: RouterContext: React.createClass is deprecated and will be removed in version 16. Use plain JavaScript classes instead. If you're not yet ready to migrate, create-react-class is available on npm as a drop-in replacement.
Fique tranquilo, essa mensagem está dentro do react e não atrapalha o seu desenvolvimento.

## Criação do nosso projeto e execução do Hello World
- De dentro da pasta projetos-javascript, execute o comando ./node_modules/.bin/create-react-app cdc-admin
- Está no Windows e tentou instalar local? Então, para criar o projeto, execute assim: node node_modules/.bin/create-react-app cdc-admin
- Está no Windows e instalou global? Então, para criar o projeto, execute assim: create-react-app cdc-admin
- Acesse a pasta do projeto que acabou de ser criado, o cdc-admin, e execute o comando npm start
- Abra seu navegador e acesse o endereço http://localhost:3000


# Aula2

## Deixe o servidor rodando
- Lembre sempre de deixar o seu servidor no ar, para que cada mudança já seja analisada e para que você possa ir analisando o resultado. Entre na pasta do projeto e, a partir do terminal, digite o comando npm start.

## Realizando o download do pure.css
- Primeiro passo é fazer o download do projeto base do pure. Acesse o link http://purecss.io/start/ e clique no link "download Pure".
- Agora precisamos fazer o download do css do template. Basta acessar o endereço http://purecss.io/layouts/side-menu/download .

## Trazendo o css para o nosso projeto
- Crie uma pasta chamada css, dentro do diretório src do nosso projeto.
- Faça a extração do zip do projeto base do pure.css e copie o arquivo pure-min.css para a pasta do css.
- Faça a extração do zip do projeto do template do pure.css. Dentro da pasta do template, existe o arquivo side-menu.css em css/layouts. Copie esse arquivo para a pasta css do nosso projeto.
- Alteração o arquivo App.js para aplicar o layout
- Abra o arquivo App.js e altere o conteúdo dele para que fique igual a https://github.com/asouza/projeto-react-alura/releases/tag/aula_2


# Aula3

## Instalação do jQuery
- Pelo terminal, vá até a pasta do seu projeto e execute o comando npm install jquery --save.

## Implementação do código da listagem
- Altere o arquivo App.js para que fique igual a https://github.com/asouza/projeto-react-alura/releases/tag/aula_3

Implementação do AJAX na função componentDidMount
Alteração do HTML retornado pelo render, que agora utilização um trecho dinâmico para exibir os autores


# Aula4

## Criando o componente para isolar o Input
- Em src, crie uma nova pasta chamada componentes
- Dentro dela, crie um novo arquivo chamado InputCustomizado.js
- Agora, no novo arquivo escreva o arquivo como em https://github.com/asouza/projeto-react-alura/releases/tag/aula_4 e altere o arquivo App.js  


# Aula5

## Instalação do pubsub como dependência
- Vá até a pasta do seu projeto e execute o seguinte comando: npm install --save pubsub-js@1.5.3. Isso fará com que a dependência seja instalada na sua pasta de módulos do Node.

## Isolando os comportamentos específicos do cadastro de autores
- Em primeiro lugar crie o arquivo Autor.js na pasta src do seu projeto. Com o arquivo aberto, escreva o seguinte código:

## Criação da classe que trata os erros de validação
- Agora, também precisamos criar a classe que é responsável por publicar os erros de validação. Crie o arquivo TratadorErros.js na pasta src e escreva o seguinte código :

## Alteração do componente que representa o input customizado
- Também é necessário que o componente do input customizado seja alterado, vá até o arquivo InputCustomizado.js e deixe com o seguinte código:

## Usando os novos componentes do autor
- É necessário que o arquivo App.js também seja alterado, para que tenha o AutorBox. Ele precisa ficar como o código que segue abaixo:

## Codigo
- https://github.com/asouza/projeto-react-alura/releases/tag/aula_5


# Aula6

- 