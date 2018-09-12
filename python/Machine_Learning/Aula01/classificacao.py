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
misterioso2 = [0, 1, 0]
misterioso3 = [1, 1, 0]
teste = [misterioso1, misterioso2, misterioso3]

modelo = MultinomialNB()
modelo.fit(dados, marcacoes) # Se encaixe a essas informacões
print(modelo.predict(teste)) # Preve um novo dado

