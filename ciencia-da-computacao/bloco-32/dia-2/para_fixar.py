# 1
name = input('Qual seu nome?')

for letter in name:
    print(letter)


# 2
numbers = input('Diga alguns números separados por espaço').split()
soma = 0

for n in numbers:
    if not n.isdigit():
        print(f"Erro ao somar valores, '{n}' é um valor inválido")
    else:
        soma += int(n)

print(f"Soma dos números é igual a {soma}")

# 3
file = open("students.txt", mode="r")
reprovados = open("reprovados.txt", mode="w")

content = file.read()
students = content.split('\n')

for line in students:
    student, grade = line.split(' ')
    if int(grade) < 6:
        reprovados.write(f'{student}\n')

file.close()
reprovados.close()
