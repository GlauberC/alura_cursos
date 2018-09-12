# Quais os pacotes exigidos no python 3 para o machine learning?


# Numpy, scipy, scikit-learn, pip



# Como treinar os dados usando o scikit-learn como MultinomialNB?

from sklearn.naive_bayes import MultinomialNB
dado1 = [0, 0, 1]
dado2 = [1, 1, 0]
dados = [dado1, dado2]
respostas=[0, 1];

modelo = MultinomialNB()
modelo.fit(dados, respostas)



# Como prever dados usando o scikit-learn como MultinomialNB
dado_misterioso1 = [0, 0, 0]
dado_misterioso2 = [1, 1, 1]
vetor_misterioso = [dado_misterioso1, dado_misterioso2]
print(modelo.predict(vetor_misterioso))