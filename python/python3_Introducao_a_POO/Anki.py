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






# Considerando uma classe simples abaixo

class Pessoa:
    def __init__(self, idade):
        self.idade = idade

    def fazer_aniversario(self):
        self.idade += 1

# Da forma que está escrito nós poderiamos alterar a idade apenas chamando o atributo idade
# Como solucionar esse problema com encapsulamento?


class Pessoa:
    def __init__(self, idade):
        self.__idade = idade

    def fazer_aniversario(self):
        self.__idade += 1






# Dado o código abaixo

class Cliente:
    def __init__(self, nome):
        self.__nome = nome

    def get_nome(self):
        return self.__nome

    def set_nome(self, nome):
        self.__nome = nome

# Com o dado está encapsulado, eu não deveria chamar o atributo nome através de cliente.nome
# Porém é possível fazer com que o código se altere para que ao chamar o cliente.nome ele na verdade chame o get_nome,
# Assim como cliente.nome = 'NOME'
# Como fazer isso?

class Cliente:
    def __init__(self, nome):
        self.__nome = nome

    # get nome
    @property
    def nome(self):
        return self.__nome

    @nome.setter
    def nome(self, nome):
        self.__nome = nome




# dado um metodo sacar_dinheiro(valor)

    def sacar_dinheiro(self, valor):
        if(self.pode_sacar(valor)):
            self.__saldo -= valor
        else:
            print('Você não tem saldo')

# é necessario eu verificar se é possível sacar o dinheiro na conta, então foi criado o seguinte metodo

    def pode_sacar(self, valor):
        valor_disponivel = self.__saldo + self.__limite
        return valor <= valor_disponivel

# Da forma que está, o metodo está publico, logo todos podem ver. porém esse é um metodo de suporte para o metodo sacar_dinheiro
# Como resolver esse problema?



    def __pode_sacar(self, valor):
        valor_disponivel = self.__saldo + self.__limite
        return valor <= valor_disponivel

    def sacar_dinheiro(self, valor):
        if (self.__pode_sacar(valor)):
            self.__saldo -= valor
        else:
            print('Você não tem saldo')





# Gostaria de criar um metodo código do banco, que retorna um valor 999. Porém esse método deve ser chamado sem criar nenhuma instancia de conta
# Logo gostaria de criar um metodo estático, como fazer isso?

    @staticmethod
    def codigo_banco():
        return "999"