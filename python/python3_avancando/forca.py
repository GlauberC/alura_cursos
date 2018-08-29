# Bibliotecas
import random


def jogar():
    'Inicia um jogo de forca'
    # Começo de jogo
    print(44*'*')
    print('******** Bem vindo ao jogo da forca ********')
    print(44*'*', '\n')

    #Setup

    palavra_secreta = "banana"
    enforcou = False
    acertou = False

    letras_acertadas = (((len(palavra_secreta)-1) * '_,') + '_').split(',')

    #Game loop
    while(not enforcou and not acertou):
        chute = input("Qual a letra? ")
        # Tratamento de entrada
        chute = chute.strip().lower()

        index = 0
        for letra in palavra_secreta:
            if(chute == letra.lower()):
                letras_acertadas[index] = letra
            index += 1


        print(' '.join(letras_acertadas),end='\n\n')

        if '_' not in letras_acertadas:
            print('Você acertou a palavra\nFim de jogo')
            acertou = True


    # Fim de jogo
    print('\n')
    print(19 * '*')
    print('*** Fim do jogo ***')
    print(19 * '*')

if(__name__ == '__main__'):
    jogar()