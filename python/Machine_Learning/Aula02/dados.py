import csv

def carregar_acessos():
    X = []
    Y = []

    arquivo = open('acesso.csv','r')
    leitor = csv.reader(arquivo)

    next(leitor)

    for home, como_funciona, contato, comprou in leitor:
        X.append([int(home), int(como_funciona), int(contato)])
        Y.append(int(comprou))

    arquivo.close()

    return X, Y

if(__name__ == '__main__'):
    X, Y = carregar_acessos()
    print(X)
    print(Y)
