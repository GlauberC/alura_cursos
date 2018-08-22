# Começo de jogo
print(44*'*')
print('***** Bem vindo ao jogo do Adivinhação *****')
print(44*'*', '\n')

# Setup
numero_secreto = 42
tentativas_restantes = 3

# Laço
while(tentativas_restantes > 0):
    print('\nVocẽ tem {} tentativas'.format(tentativas_restantes))
    # Pergunta
    chute = int(input('Digite o seu número: '))
    print('Você digitou', chute)

    # Operadores lógicos
    acertou = chute == numero_secreto
    errou_menor = chute < numero_secreto
    errou_maior = chute > numero_secreto


    # Decisões
    if acertou:
        print('Você acertou !!!')
        tentativas_restantes = 0
    else:
        tentativas_restantes -= 1
        if errou_menor:
            print('Errou! Chute abaixo do valor certo')
        elif errou_maior:
            print('Errou! Chute acima do valor certo')

# Fim de jogo
print('\n')
print(19 * '*')
print('*** Fim do jogo ***')
print(19 * '*')

