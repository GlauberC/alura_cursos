# Bibliotecas
import random


def jogar():
    'Inicia um jogo de forca'
    # Começo de jogo
    apresentacao()


    #Setup
    palavra_secreta = seleciona_palavra()

    enforcou = False
    acertou = False
    erros_maximos = 6
    erros = 0
    letras_chutadas = []

    letras_acertadas = esconde_palavra(palavra_secreta)


    #Game loop
    while(not enforcou and not acertou):
        print(' '.join(letras_acertadas), end='\n\n')
        chute = pede_um_chute(letras_chutadas)


        if(chute in letras_chutadas):
            print('Essa letra já foi chutada, tente outra\n')
        else:
            letras_chutadas.append(chute)
            if (chute not in palavra_secreta):
                erros += 1
                errou_letra(erros)

                #Perdeu
                if erros == erros_maximos:
                    print('Você perdeu\n')
                    enforcou = True
            else:
                revela_letras(palavra_secreta, chute, letras_acertadas)

                #Ganhou
                if '_' not in letras_acertadas:
                    print('Você acertou a palavra\n')
                    acertou = True



    # Fim de jogo
    encerramento()

def pede_um_chute(letras_chutadas):
    if len(letras_chutadas) != 0:
        print('Você já chutou essas letras:\n{}'.format(letras_chutadas))
    chute = input("Qual a letra? ")
    return chute.strip().lower()

def apresentacao():
    print(44*'*')
    print('******** Bem vindo ao jogo da forca ********')
    print(44*'*', '\n')

def desenhaForca(num_erros):
    print(9*"-" + '¬')
    print(9 * " " + '!')
    if num_erros >= 1:
        print(9 * ' ' + 'O')
    if num_erros == 2:
        print(9 * ' ' + '|')
    elif num_erros == 3:
        print(8 * ' ' + '/' + '|')
    elif num_erros >=4:
        print(8 * ' ' + '/' + '|' + '\\')
    if num_erros == 5:
        print(8 * ' ' + '/')
    elif num_erros == 6:
        print(8 * ' ' + '/' + ' ' + '\\')
    print('\n\n')


def seleciona_palavra():
    lista = []
    arquivo = open('palavras.txt', 'r')

    for palavra in arquivo:
        lista.append(palavra.strip())

    arquivo.close()
    palavra_selecionada = lista[random.randrange(0,len(lista))]

    return palavra_selecionada.lower()


def esconde_palavra(palavra_secreta):
    return ['_' for letra in palavra_secreta]
def errou_letra(erros):
    print('Essa letra não está na palavra')
    desenhaForca(erros)

def revela_letras(palavra_secreta, chute, letras_acertadas):
    index = 0
    for letra in palavra_secreta:
        if (chute == letra):
            letras_acertadas[index] = letra
        index += 1

def encerramento():
    print('\n')
    print(19 * '*')
    print('*** Fim do jogo ***')
    print(19 * '*')

if(__name__ == '__main__'):
    jogar()