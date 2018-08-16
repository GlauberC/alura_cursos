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