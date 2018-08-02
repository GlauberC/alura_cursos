# -*- coding: UTF-8 -*-
import re

def cadastrar(nomes):
    print '==== Cadastrar novo usuário ===='
    nome = raw_input('Digite o nome para cadastrar: ')
    nomes.append(nome)

def listar(nomes):
    print '==== Listando nomes: ===='
    for nome in nomes:
        print nome

def remover(nomes):
    print '==== Remover um usuário ===='
    nome = raw_input('Digite o nome para remover o usuario: ')
    if(nome in nomes):
        nomes.remove(nome)
        print 'Usuário removido\n'
    else:
        print 'Usuário não encontrado'

def alterar(nomes):
    print '==== Alterar nome ===='
    nome = raw_input('Digite o nome do usuario que voce quer alterar: ')
    if(nome in nomes):
        nome_index = nomes.index(nome)
        nome = raw_input('Digite o novo nome: ')
        nomes[nome_index] = nome
        print 'Usuário alterado\n'
    else:
        print 'Usuário não encontrado'

def procurar(nomes):
    print '==== Procurando um usuário ===='
    nome = raw_input('Digite o nome do usuário: ')
    if(nome in nomes):
        print '%s foi encontrado\n' %(nome)
    else:
        print 'Usuário não encontrado\n'

def procurar_regex(nomes):
    print '==== Procurando com expressões regulares ===='
    regex = raw_input('Digite a expressão regular: ')
    lista = ' '.join(nomes)
    resultados = re.findall(regex, lista)
    print resultados


def menu():
    nomes = []
    escolha = ''
    while (escolha != '0'):
        print '''0 - Finaliza\n1 - Cadastra novo usuário
2 - Lista todos os usuários\n3 - Remove um usuário\n4 - Altera um usuário
5 - Procura um usuário\n6 - Procurar com expressões Regulares'''
        escolha = raw_input('Digite uma opção: ')
        print('\n')

        if(escolha == '1'):
            cadastrar(nomes)
            print 'Nome cadastrado\n'

        if(escolha == '2'):
            listar(nomes)
            print '\n'

        if(escolha == '3'):
            remover(nomes)

        if(escolha == '4'):
            alterar(nomes)

        if(escolha == '5'):
            procurar(nomes)

        if(escolha == '6'):
            procurar_regex(nomes)
            print '\n'


    print('Adeus\n===Fechando o programa===')


menu()
