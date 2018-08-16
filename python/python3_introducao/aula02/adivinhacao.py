print(44*'*')
print('***** Bem vindo ao jogo do Adivinhação *****')
print(44*'*', '\n')

numero_secreto = 42
chute = int(input('Digite o seu número: '))

print('Você digitou', chute)

if chute == numero_secreto:
    print('Você acertou !!!')
else:
    print('ERRRRRROUU!!!')

print('\n')
print(19 * '*')
print('*** Fim do jogo ***')
print(19 * '*')

