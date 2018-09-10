
class Conta:

    def __init__(self, numero, titular, saldo, limite):
        print("Construindo objeto ... {}".format(self))
        self.numero = numero
        self.titular = titular
        self.saldo = saldo
        self.limite = limite

    def extrato(self):
        print('Saldo: R$ {:.2f} do titular {}'.format(self.saldo, self.titular))

    def deposita(self, valor):
        self.saldo += valor

    def saca(self, valor):
        self.saldo -= valor

# Main
c = Conta(1234, "Glauber", 100, 1000)

c.extrato()
c.deposita(200)
c.extrato()
c.saca(50)
c.extrato()

