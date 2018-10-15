from dados import carregar_acessos
from collections import Counter
from sklearn.naive_bayes import MultinomialNB
from sklearn.ensemble import AdaBoostClassifier
from sklearn.svm import SVC
from sklearn.multiclass import OneVsRestClassifier
from sklearn.svm import LinearSVC
from sklearn.multiclass import OneVsOneClassifier



def fit_and_predict(modelo, treino_X, treino_Y, teste_X, teste_Y):
    print('================== TESTE DO MODELO ==================')
    print(modelo)

    modelo.fit(treino_X, treino_Y)

    resposta_teste = modelo.predict(teste_X)
    print (resposta_teste)
    acertou = teste_Y == resposta_teste

    acertos = [d for d in acertou if d == 1]

    total_de_acertos = len(acertos)

    total_de_elementos = len(teste_X)

    taxa_de_acerto = total_de_acertos / total_de_elementos
    print("\nPorcentagem de acertos: {:.0f}%".format(taxa_de_acerto * 100))

    acerto_base = max(Counter(teste_Y).values())
    taxa_de_acerto_base = acerto_base / len(teste_Y)
    print("Porcentagem do acerto base: {:.0f}%\n".format(taxa_de_acerto_base * 100))

    return taxa_de_acerto


X, Y = carregar_acessos()
porcentagem_treino = 0.6
porcentagem_teste = 0.2

tamanho_de_treino = int(porcentagem_treino * len(Y))
tamanho_de_teste = int(porcentagem_teste * len(Y))
tamanho_de_validacao = int(len(Y) - tamanho_de_treino - tamanho_de_teste)


treino_X = X[0:tamanho_de_treino]
treino_Y = Y[0:tamanho_de_treino]

teste_X = X[tamanho_de_treino:tamanho_de_treino + tamanho_de_teste]
teste_Y = Y[tamanho_de_treino:tamanho_de_treino + tamanho_de_teste]

validacao_X = X[tamanho_de_treino + tamanho_de_teste:]
validacao_Y = Y[tamanho_de_treino + tamanho_de_teste:]

modeloMulti = MultinomialNB()
modeloAda = AdaBoostClassifier()
modeloSVC = SVC()
modelo_One_x_rest = OneVsRestClassifier(LinearSVC(random_state = 0))
modelo_One_x_one = OneVsOneClassifier(LinearSVC(random_state = 0))

resultados = {}
resultados["Multinomial"] = fit_and_predict(modeloMulti, treino_X, treino_Y, teste_X, teste_Y)
resultados["AdaBoost"] = fit_and_predict(modeloAda, treino_X, treino_Y, teste_X, teste_Y)
resultados["SVC"] = fit_and_predict(modeloSVC, treino_X, treino_Y, teste_X, teste_Y)
resultados["One_x_rest"] = fit_and_predict(modelo_One_x_rest, treino_X, treino_Y, teste_X, teste_Y)
resultados["One_x_one"] = fit_and_predict(modelo_One_x_one, treino_X, treino_Y, teste_X, teste_Y)


print(resultados)







