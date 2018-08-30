# Quero fazer o laço para um jogo,
#Faça um while que engloba a condição dele não acertar

acertou = False
while(not acertou):
    print('jogando')




# quero encontrar a primeira ocorrencia da letra "a" em 'tomate'
# qual a função que faz isso?
# e se eu quiser encontrar "a" em 'kiwi', quao o resultado?

print('tomate'.find('a'))
# resultará em -1





#O tipo string possui vários métodos
#Quais os métodos para deixar maiuscula, minuscula e com a primeira letra maiuscula

str = 'tEsTe'
str = str.upper()
str = str.lower()
str = str.capitalize()





# Qual o método que elimina os espaços de uma string?

str = '   string      '
str = str.strip()




#Dado uma lista = [1, 4, 7, 8]
# Como descobrir o valor máximo e minimo da funcao

lista = [1, 4, 7, 8]
print(min(lista))
print(max(lista))


# Crie um tupla com os meses do ano
# Caso quisermos transformar ela em um calendário de trabalho o qual não possui o mês de dezembro e nem janeiro
# Como poderia ser feito?

meses = ('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto',
         'Setembro', 'Outubro', 'Novembro', 'Dezembro')
meses_trabalho = list(meses)
meses_trabalho.remove('Janeiro')
meses_trabalho.remove('Dezembro')



#Para criar um jogo da forca é preciso colocar o caractere underscore para cada letra da palavra
# como fazer isso rapidamente usando python? (use List Comprehension)
palavra = 'Teste'
palavra_secreta = ['_' for letra in palavra]



#Simplifique o codigo abaixo usando List Comprehension

inteiros = [1,3,4,5,7,8,9]
pares = []
for numero in inteiros:
    if numero % 2 == 0:
        pares.append(numero)


inteiros = [1,3,4,5,7,8,9]
pares = [x for x in inteiros if x % 2 == 0]



#Ao executar o comando a baixo
arquivo = open('frutas.txt', 'r')
for linha in arquivo:
    print(linha)
arquivo.close()
# O usuário obteve como resposta nome de frutas espaçadas por 2 quebras de linhas
# Isso aconteceu pois o cada linha finaliza com \n e a função print já pula uma linha
# Como ajeitar isso de duas formas?

print(linha.strip())
# ou
print(linha,end='')

