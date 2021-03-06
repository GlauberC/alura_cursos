
class Conta:

    def __init__(self, numero, titular, saldo, limite):
        print("Construindo objeto ... {}".format(self))
        self.__numero = numero
        self.__titular = titular
        self.__saldo = saldo
        self.__limite = limite

    def extrato(self):
        print('Saldo: R$ {:.2f} do titular {}'.format(self.__saldo, self.__titular))

    def deposita(self, valor):
        self.__saldo += valor

    def saca(self, valor):
        self.__saldo -= valor

    def transfere(self, conta, valor):
        self.saca(valor)
        conta.deposita(valor)

# Main
c = Conta(1234, "Glauber", 100, 1000)
c2 = Conta(1235, "Paulo", 200, 1500)

c.transfere(c2, 50)
c.extrato()
c2.extrato()
print()
