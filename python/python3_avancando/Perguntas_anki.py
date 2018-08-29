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