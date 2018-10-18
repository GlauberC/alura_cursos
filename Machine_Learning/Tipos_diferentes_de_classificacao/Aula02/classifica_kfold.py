from dados import carregar_acessos
from collections import Counter
from sklearn.naive_bayes import MultinomialNB
from sklearn.ensemble import AdaBoostClassifier
from sklearn.svm import SVC
from sklearn.multiclass import OneVsRestClassifier
from sklearn.svm import LinearSVC
from sklearn.multiclass import OneVsOneClassifier
from sklearn.model_selection import cross_val_score
import numpy as np




def fit_and_predict(modelo, treino_X, treino_Y, k):
    print('\n\n================== TESTE DO MODELO ==================')
    print(modelo)

    scores = cross_val_score(modelo, treino_X, treino_Y, cv = k)
    print(scores)

    media = np.mean(scores)
    print("Taxa de acerto: ", media)


X, Y = carregar_acessos()
porcentagem_treino = 0.8

tamanho_de_treino = int(porcentagem_treino * len(Y))
tamanho_de_validacao = int(len(Y) - tamanho_de_treino)


treino_X = X[0:tamanho_de_treino]
treino_Y = Y[0:tamanho_de_treino]


validacao_X = X[tamanho_de_treino:]
validacao_Y = Y[tamanho_de_treino:]


modelo_One_x_one = OneVsOneClassifier(LinearSVC(random_state = 0))
modelo_One_x_rest = OneVsRestClassifier(LinearSVC(random_state = 0))
modeloMulti = MultinomialNB()
modeloAda = AdaBoostClassifier()
modeloSVC = SVC()



fit_and_predict(modelo_One_x_one, treino_X, treino_Y, 5)
fit_and_predict(modelo_One_x_rest, treino_X, treino_Y, 5)
fit_and_predict(modeloMulti, treino_X, treino_Y, 5)
fit_and_predict(modeloAda, treino_X, treino_Y, 5)
fit_and_predict(modeloSVC, treino_X, treino_Y, 5)










