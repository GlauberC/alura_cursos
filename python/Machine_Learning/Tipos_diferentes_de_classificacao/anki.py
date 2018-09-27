# O que o modelo one vs rest faz?

# Ele transforma todos os 0s em 1s e testa, depois transforma todos os 2 em 1 e compara, depois transforma 3 em 1 e assim por diante





# Como importar e criar o modelo one vs rest?

from sklearn.multiclass import OneVsRestClassifier
from sklearn.svm import LinearSVC

modelo = OneVsRestClassifier(LinearSVC(random_state = 0))







# Qual a diferença do modelo One x rest para o modelo One x One



# No modelo One x One o programa testará transformando 1 em 0 , depois uma 0 em 1, depois 2 em 1 , depois 2 em 0 e assim por diante






# como criar o modelo One vs One


from sklearn.multiclass import OneVsOneClassifier
from sklearn.svm import LinearSVC

modelo = OneVsOneClassifier(LinearSVC(random_state = 0))





# o que é o k-fold


# Divide o todos os dados em k pedaços e faz testes cruzados onde um pedaço é teste e o restantes é treino para cada subdivisão feita