# Bibliotecas
import random

def jogar():
    'Inicia um jogo de advinhação de números'
    # Começo de jogo
    print(44*'*')
    print('***** Bem vindo ao jogo do Adivinhação *****')
    print(44*'*', '\n')

    # Setup
    numero_secreto = random.randrange(1, 101)
    pontos = 1000
    pontos_perdidos = 0

    # Lanço nível
    tentativas_restantes = 0
    while (tentativas_restantes == 0):
        print('0 - Fácil\n1 - Médio\n2 - Difícil')
        escolha = int(input('Escolha um nível: '))
        if(escolha == 0):
            tentativas_restantes = 10
        elif(escolha == 1):
            tentativas_restantes = 8
        elif(escolha == 2):
            tentativas_restantes = 6
        else:
            print('Nível Inválido\n')

    # Laço chute
    for tentativas in range(tentativas_restantes, 0, -1):
        print('\nVocẽ tem {} tentativas'.format(tentativas))
        # Pergunta
        chute = int(input('Digite o seu número de 1 a 100: '))

        if(chute <= 0 or chute > 100):
            print('Você deveria digitar um número de 1 a 100, você perdeu uma chance')
            continue

        print('Você digitou {}\n'.format( chute))

        # Operadores lógicos
        acertou = chute == numero_secreto
        errou_menor = chute < numero_secreto
        errou_maior = chute > numero_secreto


        # Decisões
        if acertou:
            print('Você acertou !!!\n Você fez {} pontos'.format(pontos))
            break
        else:
            pontos_perdidos = abs(numero_secreto - chute)
            pontos = pontos - pontos_perdidos
            if errou_menor:
                print('Errou! Chute abaixo do valor certo')
            elif errou_maior:
                print('Errou! Chute acima do valor certo')

    # Fim de jogo
    print('\n')
    print(19 * '*')
    print('*** Fim do jogo ***')
    print(19 * '*')

if(__name__ == '__main__'):
    jogar()