# -*- coding: utf-8 -*-
class Data(object):
    'Essa classe exibe datas formatadas'
    def __init__(self, dia, mes, ano):
        self.dia = dia
        self.mes = mes
        self.ano = ano

    def imprime(self):
        print '%s/%s/%s'%(self.dia, self.mes, self.ano)

class Pessoa(object):
    def __init__(self, nome, peso, altura):
        self.nome = nome
        self.peso = peso
        self.altura = altura

    def imprime(self):
        print 'O IMC de %s é %s'%(self.nome, self.calcula_IMC())

    def calcula_IMC(self):
        return self.peso / self.altura ** 2

class Conta(object):
    def __init__(self, titular, saldo):
        self.titular = titular
        self.saldo = saldo


    def calcular_imposto(self):
        imposto = self.saldo * 0.10
        return imposto


class ContaCorrente(Conta):
    def __init__(self, titular, saldo):
        super(ContaCorrente, self).__init__(titular, saldo)

    def calcular_imposto(self):
        return super(ContaCorrente, self).calcular_imposto() + 20

conta_corrente = ContaCorrente('Leonardo', 20)
print conta_corrente.calcular_imposto()

# data = Data(4,5,1989)
# data.imprime()
#
# pessoa = Pessoa("Ronaldo", 105, 1.78)
# pessoa.imprime()
