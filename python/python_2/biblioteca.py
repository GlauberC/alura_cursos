# python/biblioteca.py
# Convites
def gera_nome_convite(nome):
    tamanho = len(nome)
    primeiro = nome[0:4]
    segundo = nome[tamanho-4:tamanho]
    return primeiro + ' ' + segundo

def envia_convite(nome_formatado):
    print 'Enviando convite para %s' %(nome_formatado)

def processa_convite(nome):
    envia_convite(gera_nome_convite(nome))


# Cadastro
def cadastrar(lista):
    nome = raw_input('Digite um nome para cadastrar: ')
    lista.append(nome)

def remover(lista):
    nome = raw_input('Digite o nome que voce quer remover')
    lista.remove(nome)
