#sorteie um número de 1 a 100
import random
print(random.randrange(1,101))

#sorteie um número de 1 a 100 contando com decimais de 2 casas
import random
print('Resposta: {:.2f}'.format(random.random()*100))

# Crie uma função que recebe um numero e retorna ele negativo
def negativa_numero(n):
    'Retorna o valor negativo de um numero'
    return -n

#eu tenho uma função jogar em um arquivo chamado campo_minado, como eu faço para execultar essa função toda vez que eu abrir o arquivo campo_minado?
def jogar():
    print('jogar')

if(__name__ == '__main__'):
    jogar()