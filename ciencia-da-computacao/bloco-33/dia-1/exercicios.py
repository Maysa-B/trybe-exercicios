# 1


class TV:
    def __init__(self, tamanho) -> None:
        self.__tamanho = tamanho
        self.__volume = 50
        self.__canal = 1
        self.__ligada = False

    @property
    def tamanho(self):
        return self.__tamanho

    @property
    def volume(self):
        return self.__volume

    @property
    def canal(self):
        return self.__canal

    @property
    def ligada(self):
        return self.__ligada

    def aumentar_volume(self):
        if self.__volume < 99:
            self.__volume += 1
        else:
            print("Você atingiu o valor máximo permitido")

    def diminuir_volume(self):
        if self.__volume > 1:
            self.__volume -= 1
        else:
            print("Você atingiu o volume mínimo permitido")

    def modificar_canal(self, canal):
        if canal < 1 or canal > 99:
            raise ValueError("Esse canal não existe")

        self.__canal = canal

    def ligar_desligar(self):
        self.__ligada = not self.__ligada


minha_tv = TV(42)
minha_tv.ligar_desligar()
print(minha_tv.ligada)
for i in range(50):
    minha_tv.aumentar_volume()
    # print(minha_tv.volume)
for i in range(1, 100):
    minha_tv.modificar_canal(i)
    minha_tv.diminuir_volume()
    # print(minha_tv.volume)
    # print(minha_tv.canal)
minha_tv.ligar_desligar()
print(minha_tv.ligada)
