
from sklearn.naive_bayes import MultinomialNB
from dados import carregar_acessos
X,Y = carregar_acessos()
porcentagem_treino = 0.9
modelo = MultinomialNB()



tamanho_de_treino = int(porcentagem_treino * len(Y))
tamanho_de_teste = int(len(Y) - tamanho_de_treino)


treino_X = X[:tamanho_de_treino]
treino_Y = Y[:tamanho_de_treino]

teste_X = X[-tamanho_de_teste:]
teste_Y = Y[-tamanho_de_teste:]

modelo.fit(treino_X, treino_Y)

resposta_teste = modelo.predict(teste_X)
print("\nResposta: ", resposta_teste)

diferenca = teste_Y - resposta_teste
print("\nDiferença: ", diferenca)

acertos = [d for d in diferenca if d == 0]
print("\nAcertos: ", acertos)

total_de_acertos = len(acertos)
print("\nTotal de acertos: ", total_de_acertos)

total_de_elementos = len(teste_X)
print("\nTotal de elementos ", total_de_elementos)

taxa_de_acerto = total_de_acertos / total_de_elementos
print("\nPorcentagem de acertos: {:.0f}%".format(taxa_de_acerto * 100))



