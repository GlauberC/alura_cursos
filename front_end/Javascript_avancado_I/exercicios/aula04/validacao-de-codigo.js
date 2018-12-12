let codigo = 'GWZ-JJ-12';

function validaCodigo(codigo) {

    if(/\D{3}-\D{2}-\d{2}/.test(codigo)) {
          alert('Código válido!');
      } else {
          alert('Código inválido');
      }

}

validaCodigo('GWZ-JJ-12'); // válido
validaCodigo('1X1-JJ-12'); // inválido