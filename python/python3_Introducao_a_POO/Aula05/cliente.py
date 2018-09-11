class Cliente:
    def __init__(self, nome):
        self.__nome = nome

    #get nome
    @property
    def nome(self):
        return self.__nome

    @nome.setter
    def nome(self, nome):
        self.__nome = nome

c = Cliente('Paulo')
print(c.nome)
c.nome = 'Adriano'
print(c.nome)