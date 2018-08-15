# -*- coding: utf-8 -*-

def w():
    # arquivo = open('test.txt', 'w')   # Sobrescreve o arquivo
    arquivo = open('test.txt', 'a')     # Adiciona no fim do arquivo

    arquivo.write('Python rocks \n')
    arquivo.close()

def r():
    arquivo = open('testeRead.txt','r')
    # linha = arquivo.readline()
    # print linha
    for linha in arquivo:
        print linha
    arquivo.close()

def r_w_Binaria():
    #arquivo copia.py
    logo = open('python-logo.png', 'rb')
    data = logo.read()
    print('Imagem lida')
    logo.close()

    logo2 = open('python-logo2.png', 'wb')
    logo2.write(data)
    print('imagem copiada')
    logo2.close()

r()
