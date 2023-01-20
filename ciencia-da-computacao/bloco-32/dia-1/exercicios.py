# 1
def bigger_is(a, b):
    if a > b:
        return a

    return b


print(bigger_is(3, 2))

# 2
def media(number_list):
    soma = 0

    for i in number_list:
        soma += i

    return soma / len(number_list)


print(media([1,2,3,4,5,6]))

# 3
def quadrado_asterisco(n):
    for i in range(n):
        print(n * '*')


quadrado_asterisco(2)

# 4
def bigger_length(names):
    bigger = ''

    for name in names:
        if len(name) > len(bigger):
            bigger = name
    
    return bigger


print(bigger_length(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))

def how_much_paint(metros):
    litros = metros / 3
    galoes = litros // 18

    if litros % 18:
        galoes += 1

    return (galoes, f"R$ {galoes * 80}")


print(how_much_paint(55))