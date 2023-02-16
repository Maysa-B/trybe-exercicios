def how_many_even(n: int):
    count = 0

    for i in range(1, n + 1):
        if i % 2 == 0:
            count += 1

    return count


how_many_even(4)


def how_many_even_recursivo(n: int):
    if n == 1:
        return 0

    if n % 2 == 0:
        return 1 + how_many_even_recursivo(n - 1)

    return how_many_even_recursivo(n - 1)

how_many_even_recursivo(5)

def wich_is_the_biggest(numbers: list[int]):
    if len(numbers) == 1: return numbers[0] 

    n = numbers[0] 
    numbers.pop(0)

    x = wich_is_the_biggest(numbers)

    if n > x:
        return n
    else:
        return x
    
wich_is_the_biggest([10, 2, 8, 92])


