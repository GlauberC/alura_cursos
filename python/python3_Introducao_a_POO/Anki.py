# Como criar uma classe para representar uma conta com o seu numero, nome do titular,saldo e limite?

class Conta:
    def __init__(self, numero, titular, saldo, limite):
        self.numero = numero
        self.titular = titular
        self.saldo = saldo
        self.limite = limite





#Dado o seguinte código abaixo
conta1 = Conta('123', 'Paulo', 100, 1000)
a = conta1
# ao fazer isso nós criamos uma nova referencia de conta1 para a.
# Como eliminar essa referencia?

a = None





# Crie uma classe Data que recebe dia, mes e anos
# Em seguida crie um metodo formatada que exibe a data formatada
# Por fim crie uma instancia de data e chame o metodo formatada


class Data:
    def __init__(self, dia, mes, ano):
        self.dia = dia
        self.mes = mes
        self.ano = ano

    def formatada(self):
        print("{:02d}/{:02d}/{}".format(self.dia, self.mes, self.ano))

d = Data(11,4,1989)
d.formatada()

