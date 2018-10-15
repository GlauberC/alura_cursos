from sklearn.naive_bayes import MultinomialNB

#Gordinho?, perna curta?, faz auau?
porco1 = [1, 1, 0]
porco2 = [1, 1, 0]
porco3 = [1, 1, 0]
cachorro1 = [1, 1, 1]
cachorro2 = [0, 1, 1]
cachorro3 = [0, 1, 1]

dados = [porco1, porco2, porco3, cachorro1, cachorro2, cachorro3]
marcacoes = [1, 1, 1, -1, -1, -1]
misterioso1 = [1, 1, 1]
misterioso2 = [1, 0, 0]
misterioso3 = [0, 0, 1]

testes = [misterioso1, misterioso2, misterioso3]
marcacoes_teste = [-1, 1, -1]
num_elementos = len(testes)


modelo = MultinomialNB()
modelo.fit(dados, marcacoes) # Se encaixe a essas informacões
resultado = modelo.predict(testes) # Preve um novo dado

diferenca = resultado - marcacoes_teste
print('Resultado: {}'.format(diferenca))

acertos = [d for d in diferenca if d == 0]
num_acertos = len(acertos)
taxa_de_acerto = 100 * num_acertos / num_elementos
print('Acertos: {}'.format(acertos))
print('Total de acertos: {}'.format(num_acertos))
print('Total de elementos: {}'.format(num_elementos))
print('Taxa de acerto:: {}'.format(taxa_de_acerto))