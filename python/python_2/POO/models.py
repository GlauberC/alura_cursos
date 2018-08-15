# -*- coding: utf-8 -*-

# CLASSES
class Perfil(object):
    'Classe para o perfil de um usuário'
    def __init__(self, nome, telefone, empresa):
        self.nome = nome
        self.telefone = telefone
        self.empresa = empresa
        self.__curtidas = 0

    def imprime_usuario(self):
        print 'Nome: %s / telefone: %s / empresa: %s'%(self.nome, self.telefone, self.empresa)

    def curtir(self):
        self.__curtidas += 1

    def mostrar_curtidas(self):
        print 'O numero de curtidas é %s' %(self.__curtidas)

    def obter_curtidas(self):
        return self.__curtidas

class Perfil_Vip(Perfil):
    'Classe para perfil de usuario vip'
    def __init__(self, nome, telefone, empresa, apelido):
        super(Perfil_Vip, self).__init__(nome, telefone, apelido)
        self.apelido = apelido

    def obter_credito(self):
        return super(Perfil_Vip, self).obter_curtidas() * 10.0

vip = Perfil_Vip('Glauber', '3222-2222', 'UFRN', 'GlauGlau')
vip.curtir()
vip.curtir()
print vip.obter_credito()
print vip.apelido


# FUNÇÃO MAIN
# perfil2 = Perfil('Steve', '2121-2121', 'Minecraft')
# perfil3 = Perfil('Peter', '3333-4444', 'Minecraft')
# perfil = Perfil(nome='Glauber', telefone='3222-2222', empresa='UFRN')
#
# perfil.imprime_usuario()
# print type(perfil)
# print perfil.__class__
#
# perfil.curtidas = 4
# print perfil.curtidas
# perfil.curtir()
# perfil.mostrar_curtidas()
