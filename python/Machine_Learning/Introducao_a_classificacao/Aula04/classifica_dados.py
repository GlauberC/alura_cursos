from dados import carregar_acessos
from collections import Counter
from sklearn.naive_bayes import MultinomialNB

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

acertou = teste_Y == resposta_teste
print("\nAcertou?: ", acertou)

acertos = [d for d in acertou if d == 1]
print("\nAcertos: ", acertos)

total_de_acertos = len(acertos)
print("\nTotal de acertos: ", total_de_acertos)

total_de_elementos = len(teste_X)
print("\nTotal de elementos ", total_de_elementos)

taxa_de_acerto = total_de_acertos / total_de_elementos
print("\nPorcentagem de acertos: {:.0f}%".format(taxa_de_acerto * 100))

acerto_base = max(Counter(teste_Y).values())
taxa_de_acerto_base = acerto_base / len(teste_Y)
print("\nPorcentagem do acerto base: {:.0f}%".format(taxa_de_acerto_base * 100))

#
