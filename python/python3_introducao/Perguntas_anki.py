# Como printar rapidamente um data por meio das variaveis dia, mes e ano para o formato dia/mes/ano

dia = 11
mes = 4
ano = 1989

print(dia, mes, ano, sep='/', end='\n')


# Como verificar se uma dada pessoa é maior de idade ?

idade = int(input('Digite sua idade'))
if idade >= 18:
    print('Maior de idade')
else:
    print('Menor de idade')


# Como Verificar se um eleitor é obrigado a votar. Faça um programa que leia a idade e responda essa pergunta

idade = int(input('Digite usa idade: '))
if(idade < 16):
    print('Não pode votar')
elif(idade <18):
    print('Voto opcional por menor idade')
elif(idade >= 65):
    print('Voto opcional por maior idade ')
else:
    print('Voto Obrigatório')

# Enquanto o usuário digita sim, o programa imprime não, se o usuário digitar não o programa imprime sim, nenhuma das opções o programa deverá imprimir cansei de brincar

resposta = 'sim'
while(resposta == 'sim'):

    resposta = input("digite:  ")

    if(resposta == 'sim'):
        print('não')

if(resposta == 'não'):
    print('sim')
else:
    print('cansei de brincar')

# Como exibir uma msg em python 3 "Você tem X anos" sabendo que X é a idade. VocÊ deve usar string interpolation

X = 20
print('Você tem {} anos'.format(X))

# substitua o while abaixo pelo for
x = 0
while(x <= 10):
    print(x)
    x += 1

for x in range(0, 11, 1):
    print(x)

#qual o comando para sair de um laço
# break

#Qual o comando para pular para proxima interação
# continue

#faça um programa que leia um numero e retorne uma mensagem "número valido" se estiver entre 1 e 100
# e invalido se for menor que 1 e maior que 100
# obs: Use um if e um elif, não use else

num = int(input("digite um numero: "))

if (num > 0 and num <= 100):
    print('número válido')
elif(num <= 0 or num >100):
    print('número inválido')

#Dado um valor X = 32.12345, imprima na tela de forma de forma que fique como um valor financeiro em reais
x = 32.12345
print('R$ {:.2f}'.format(x))

# dado dia = 01 e mes = 04, imprima na tela, de forma correta, a data no formato dd/mm
dia = 1
mes = 4
print('{:02d}/{:02d}'.format(dia, mes))