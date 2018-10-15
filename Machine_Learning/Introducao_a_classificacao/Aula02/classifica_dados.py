from dados import carregar_acessos
X,Y = carregar_acessos()

from sklearn.naive_bayes import MultinomialNB
modelo = MultinomialNB()



treino_X = X[:90]
treino_Y = Y[:90]

teste_X = X[-9:]
teste_Y = Y[-9:]

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
print("\nPorcentagem de acertos: {:.0f}%".format((total_de_acertos/total_de_elementos) * 100))