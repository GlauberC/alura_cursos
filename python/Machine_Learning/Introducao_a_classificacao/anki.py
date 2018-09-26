X = 1
Y = 1







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







#Como abrir um arquivo csv chamado acesso.csv
import csv

arquivo = open('acesso.csv', 'r')
leitor = csv.reader(arquivo)







# Tenho um banco de dados com 100 elementos, cada um com várias caracteristicas de Sim ou não.
# Ao treinar com os 100 elementos, meu programa deu uma taxa de acerto de 99,9%
# O que explica essa alta taxa de acerto?


# Nós precisamos treinar com uma parte dos dados e usar a outra parte para avaliar o sistema.








# Tenho 100 dados, armazenados em variaveis X e Y, como separar essas variáveis em teste e treino?
# Qual variável eu uso na função fit, predit e no calculo da diferença?



treino_X = X[:90]
treino_Y = Y[:90]

teste_X = X[-9:]
teste_Y = Y[-9:]

modelo.fit(treino_X, treino_Y)
resposta_teste = modelo.predict(teste_X)
acertou = teste_Y == resposta_teste








# Como ler um arquivo CSV usando o pandas?

import pandas as pd
df = pd.read_csv('buscas.csv')  # Df = Data Frame

X_df = df[['Titulo1', 'Titulo2', 'Titulo3']]
Y_df = df['Resultado']






# Ao ler um df ou DataFrame de um arquivo CSV é necessário tratar os dummies
# Eles são dados em string que representam uma ideia como quais cursos uma pessoa fez ()
# Como extrair um dummie  de uma dada coluna?

# Leia o arquivo e extria as colunas
X_df_dum = pd.get_dummies(X_df)

#OBS: Não extrair o dummie de uma coluna com apenas 0 ou 1s







# O df ou DataFrame são conjuntos dados, porém não é considerado um array
# Como converter esse df para array?


# Leia o arquivo e extria as colunas
# Leia todos os dummies necessários

X = X_df_dum.values
Y = Y_df.values






# Como saber se o algoritmo treinado está fornecendo um resultado bom ?



# Compare com um algoritmo que sempre chuta apenas uma resposta, ou sempre 1 ou sempre 0
# A escolha tem que ser dada pela maior quantidade de dados( maior números de 1s ou maior números de 0s)









# Para criar o algoritmo de um chute só é necessário contar todos o maior valor entre 0 e 1.
# Porém os dados podem estar sob a forma de yes ou no, sim ou não.
# Assim o Python apresenta um forma generica para contar qualquer coisa, como faz?



from collections import Counter
acerto_base = max(Counter(Y).values())
taxa_de_acerto_base = acerto_base / len(Y)








# Como funciona o modelo naive bayes


# Ele calcula a propabilidade baseado nas caracteristicas e sempre propoe o de maior probabilidade.









#Quais são as 3 fases que utilizamos para realizar um teste ideal?


#Treinar mais de um algoritmo, testá-los e escolher o melhor entre eles para testar com os dados reais.