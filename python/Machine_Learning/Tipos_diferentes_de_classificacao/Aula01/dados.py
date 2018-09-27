import pandas as pd

def carregar_acessos():
    df = pd.read_csv('situacao_do_cliente.csv') #Df = Data Frame

    X_df = df[['recencia', 'frequencia', 'semanas_de_inscricao']]
    Y_df = df['situacao']

    X_df_dum = pd.get_dummies(X_df)

    X = X_df_dum.values
    Y = Y_df.values
    return X, Y

if(__name__ == '__main__'):
    X, Y = carregar_acessos()
    print(X)
    print(Y)