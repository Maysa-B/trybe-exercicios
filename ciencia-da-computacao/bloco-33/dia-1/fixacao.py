# exercício de fixação

# 1
class Ventilador:
    def __init__(self, cor, marca, potencia, preco) -> None:
        self.cor = cor
        self.marca = marca
        self.potencia = potencia
        self.preco = preco
        self.ligado = False
        self.velocidade = 0


class Pessoa:
    def __init__(self, name, money) -> None:
        self.name = name
        self.money = money
        self.ventilador = None

    def comprar_ventilador(self, ventilador: Ventilador):
        if ventilador.preco > self.money:
            raise ValueError("Não há dinheiro suficiente")

        self.money -= ventilador.preco
        self.ventilador = ventilador
        print(f"{self.name} gastou {ventilador.preco} e agora possui {self.money}")

    def __str__(self) -> str:
        if self.ventilador is None:
            return f"{self.name} NÃO tem um ventilador"
        else:
            return f"{self.name} TEM um ventilador"


ventilador_top = Ventilador("preto", "arno", 350, 100)
pessoa_qualquer = Pessoa("Maysa", 1000)

print(pessoa_qualquer)
pessoa_qualquer.comprar_ventilador(ventilador_top)
print(pessoa_qualquer)
