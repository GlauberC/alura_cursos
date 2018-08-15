# -*- coding: utf-8 -*-

class Pilha(object):
    'Classe que representa uma pilha'
    def __init__(self, tamanho, capacidade, amperagem):
        self.__tamanho = tamanho    #Private
        self.__capacidade = capacidade #Private
        self.__amperagem = amperagem #Private
        self._carregada = True  #Protected

    def esta_carregada(self):
        return self._carregada

    def descarregar(self):
        self._carregada = False

    def fornecer_energia(self):
        if(self.esta_carregada()):
            print('A pilha foi usada')
            self.descarregar()
        else:
            print('A pilha está descarregada')

class Pilha_Recarregavel(Pilha)
    'Classe que representa uma pilha recarregável a partir da classe Pilha':
    def __init__(self, tamanho, capacidade, amperagem, ciclos):
        super(Pilha_Recarregavel, self).__init__(tamanho, capacidade, amperagem)
        self.__ciclos = ciclos

    def obter_ciclos(self):
        return self.__ciclos

    def recarregar(self):
        if(super(Pilha_Recarregavel, self).esta_carregada()):
            print 'A pilha já está carregada'
        elif(self.obter_ciclos() == 0):
            print 'Essa pilha já atingiu o limite de ciclos, impossível carregar'
        else:
            print 'Pilha recarregada'
            self._carregada = True
            self.__ciclos -= 1;



p1 = Pilha("AA", 3000, 28)
print p1.esta_carregada()
p1.fornecer_energia()
p1.fornecer_energia()
print '\n\n'

p2 = Pilha_Recarregavel("AA", 3000, 28, 3)
print p2.esta_carregada()
p2.fornecer_energia()
p2.fornecer_energia()
p2.recarregar()
print p2.obter_ciclos()
print p2.esta_carregada()
p2.esta_carregada()
p2.recarregar()
p2.fornecer_energia()
p2.recarregar()
p2.fornecer_energia()
p2.recarregar()
p2.fornecer_energia()
p2.recarregar()
print p2.obter_ciclos()
