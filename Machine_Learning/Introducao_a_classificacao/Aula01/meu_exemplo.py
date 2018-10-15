# Quero saber se uma pessoa comprou o produto, caso ele tenha visto algumas das 3 propagandas
# Propaganda1, propaganda2, propaganda3, propaganda4

from sklearn.naive_bayes import MultinomialNB

dado_conhecido0 = [1, 0, 0]
dado_conhecido1 = [0, 1, 0]
dado_conhecido2 = [0, 0, 1]
dado_conhecido3 = [0, 1, 1]
dado_conhecido4 = [0, 0, 0]
dado_conhecido5 = [1, 1, 1]
vetor_conhecido = [dado_conhecido0, dado_conhecido1, dado_conhecido2, dado_conhecido3, dado_conhecido4, dado_conhecido5]
vetor_conhecido_resposta = [1, -1, -1, 1, -1, 1]

dado_misterioso0 = [0, 0, 0]
dado_misterioso1 = [0, 0, 1]
dado_misterioso2 = [0, 1, 0]
dado_misterioso3 = [0, 1, 1]
dado_misterioso4 = [1, 0, 0]
dado_misterioso5 = [1, 0, 1]
dado_misterioso6 = [1, 1, 0]
dado_misterioso7 = [1, 1, 1]

vetor_misterioso = [dado_misterioso0, dado_misterioso1, dado_misterioso2, dado_misterioso3, dado_misterioso4, dado_misterioso5, dado_misterioso6, dado_misterioso7]

modelo = MultinomialNB()
modelo.fit(vetor_conhecido, vetor_conhecido_resposta)
previsao = modelo.predict(vetor_misterioso)

print(previsao)


