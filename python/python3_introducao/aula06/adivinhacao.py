# Bibliotecas
import random

# Começo de jogo
print(44*'*')
print('***** Bem vindo ao jogo do Adivinhação *****')
print(44*'*', '\n')

# Setup
numero_secreto = random.randrange(1, 101)
tentativas_restantes = 7

# Laço
for tentativas in range(tentativas_restantes, 0, -1):
    print('\nVocẽ tem {} tentativas'.format(tentativas))
    # Pergunta
    chute = int(input('Digite o seu número de 1 a 100: '))

    if(chute <= 0 or chute > 100):
        print('Você deveria digitar um número de 1 a 100, você perdeu uma chance')
        continue

    print('Você digitou', chute)

    # Operadores lógicos
    acertou = chute == numero_secreto
    errou_menor = chute < numero_secreto
    errou_maior = chute > numero_secreto


    # Decisões
    if acertou:
        print('Você acertou !!!')
        break
    else:
        if errou_menor:
            print('Errou! Chute abaixo do valor certo')
        elif errou_maior:
            print('Errou! Chute acima do valor certo')

# Fim de jogo
print('\n')
print(19 * '*')
print('*** Fim do jogo ***')
print(19 * '*')

