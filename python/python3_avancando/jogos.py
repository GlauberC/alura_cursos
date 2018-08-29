# Bibliotecas
import adivinhacao
import forca

def escolha_jogo():
    'Função para escolher um jogo dentre os presentes nos arquivos importados'
    # Apresentação
    print(44*'*')
    print('************* Seleção de jogos *************')
    print(44*'*', '\n')

    #setup
    numero_jogos = 2
    escolha = -1

    # loop selecao
    while(escolha == -1):
        print('\n0 - Advinhação\n1 - Forca')
        escolha = int(input('Qual jogo você quer jogar? '))
        if(escolha == 0):
            print('\n-> Abrindo o jogo da Advinhação\n\n')
            adivinhacao.jogar()
        elif(escolha == 1):
            print('\n-> Abrindo o jogo da forca\n\n')
            forca.jogar()
        else:
            print('\n ! Jogo inválido\n')
            escolha = -1

if(__name__ == '__main__'):
    escolha_jogo()