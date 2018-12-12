function exibeNoConsole(lista) {
    lista.forEach(item => console.log(item));
}
let listaDeNomes1 = ['Flávio', 'Rogers', 'Júlia'];
let listaDeNomes2 = ['Vieira', 'Fernanda', 'Gerson'];
exibeNoConsole(listaDeNomes1.concat(listaDeNomes2));